import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting in-memory map: IP -> timestamp[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

const SERVICE_TITLES: Record<string, { en: string; ar: string }> = {
  'general-contracting': { en: 'General Contracting', ar: 'المقاولات العامة' },
  'building-maintenance': { en: 'Building Maintenance', ar: 'صيانة المباني' },
  'support-services': { en: 'Support Services', ar: 'الخدمات المساندة' },
  'project-management': { en: 'Project Management', ar: 'إدارة المشاريع' },
  'design-structural': { en: 'Design & Structural Analysis', ar: 'التصميم والتحليل الإنشائي' },
  'project-execution': { en: 'Project Execution', ar: 'تنفيذ المشاريع' },
};

function sanitize(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/[<>]/g, '');
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 120;
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown-ip';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'RATE_LIMITED',
          message: 'Too many requests. Please wait a few minutes before submitting again.',
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'INVALID_PAYLOAD', message: 'Invalid request payload.' },
        { status: 400 }
      );
    }

    // Honeypot spam trap
    if (body.botField || body.website) {
      // Silently accept bots to avoid giving feedback
      return NextResponse.json({ success: true, message: 'Inquiry received successfully.' });
    }

    const name = sanitize(body.name);
    const company = sanitize(body.company);
    const email = sanitize(body.email).toLowerCase();
    const phone = sanitize(body.phone);
    const serviceKey = sanitize(body.service || body.discipline);
    const message = sanitize(body.message);
    const language = body.lang === 'ar' ? 'ar' : 'en';

    // Validation
    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED', message: 'Please provide a valid name (2-100 characters).' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED', message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || message.length < 5 || message.length > 3000) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED', message: 'Please provide project details (5-3000 characters).' },
        { status: 400 }
      );
    }

    if (company && company.length > 100) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED', message: 'Company name is too long.' },
        { status: 400 }
      );
    }

    if (phone && phone.length > 50) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED', message: 'Phone number is too long.' },
        { status: 400 }
      );
    }

    const serviceInfo = SERVICE_TITLES[serviceKey] || {
      en: serviceKey || 'General Contracting',
      ar: serviceKey || 'المقاولات العامة',
    };
    const serviceTitle = language === 'ar' ? `${serviceInfo.ar} (${serviceInfo.en})` : serviceInfo.en;

    const recipientEmail = process.env.CONTACT_TO_EMAIL || 'info@aqarland.ae';
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || (smtpUser ? `"AQAR LAND Website" <${smtpUser}>` : `"AQAR LAND Inquiries" <${recipientEmail}>`);

    const timestamp = new Date().toISOString();

    // Check if SMTP is configured
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn(`[Contact API] SMTP credentials not configured. Target: ${recipientEmail}. Inquiry from: ${email} (${name})`);
      return NextResponse.json(
        {
          success: false,
          error: 'SMTP_UNCONFIGURED',
          message: 'Mail delivery service is currently not configured.',
        },
        { status: 503 }
      );
    }

    // Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `AQAR LAND Website Inquiry — ${serviceInfo.en} — ${name}`;

    const textContent = `
AQAR LAND Website Inquiry
========================================

Name: ${name}
Company: ${company || 'N/A'}
Email: ${email}
Phone: ${phone || 'N/A'}
Service / Discipline: ${serviceTitle}
Language: ${language === 'ar' ? 'Arabic' : 'English'}
Submission Time: ${timestamp}
Source: AQAR LAND Website (https://aqarland.ae)

Project Specifications / Requirements:
----------------------------------------
${message}
========================================
`.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>AQAR LAND Website Inquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #181A1B; background-color: #F7F5F0; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #E2DED6; padding: 32px;">
    <div style="border-bottom: 2px solid #C85A32; padding-bottom: 16px; margin-bottom: 24px;">
      <h2 style="margin: 0; color: #181A1B; font-size: 20px; letter-spacing: 1px;">AQAR LAND — WEBSITE INQUIRY</h2>
      <p style="margin: 4px 0 0 0; color: #C85A32; font-size: 12px; font-weight: bold; text-transform: uppercase;">Abu Dhabi, UAE</p>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6; font-weight: bold; width: 140px; color: #2C2F33;">Client Name:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6; color: #181A1B;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #2C2F33;">Company:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6; color: #181A1B;">${company || 'N/A'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #2C2F33;">Email Address:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6;"><a href="mailto:${email}" style="color: #C85A32; text-decoration: none;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #2C2F33;">Phone Number:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6; color: #181A1B;">${phone || 'N/A'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #2C2F33;">Discipline / Service:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6; color: #C85A32; font-weight: bold;">${serviceTitle}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #2C2F33;">Language:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #EFECE6; color: #181A1B;">${language === 'ar' ? 'Arabic' : 'English'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold; color: #2C2F33;">Received At:</td>
        <td style="padding: 8px 0; color: #2C2F33; font-family: monospace; font-size: 12px;">${timestamp}</td>
      </tr>
    </table>

    <div style="background-color: #F7F5F0; border: 1px solid #E2DED6; padding: 20px; margin-bottom: 24px;">
      <h3 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #C85A32;">Project Specifications / Message</h3>
      <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #181A1B;">${message}</p>
    </div>

    <div style="font-size: 11px; color: #2C2F33; border-top: 1px solid #E2DED6; padding-top: 16px;">
      <p style="margin: 0;">This email was sent from the official AQAR LAND website contact form (https://aqarland.ae).</p>
      <p style="margin: 4px 0 0 0;">Reply directly to this email to respond to <strong>${email}</strong>.</p>
    </div>
  </div>
</body>
</html>
`.trim();

    await transporter.sendMail({
      from: smtpFrom,
      to: recipientEmail,
      replyTo: email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you. Your inquiry has been sent successfully.',
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error('[Contact API] Failed to send email:', err?.message || err);
    return NextResponse.json(
      {
        success: false,
        error: 'DISPATCH_ERROR',
        message: "We couldn't send your inquiry. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
