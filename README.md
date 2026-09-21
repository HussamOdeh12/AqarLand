# AQAR LAND

The official bilingual corporate portfolio website for **AQAR LAND Contracting & Transporting Est.** (مؤسسة عقارلاند للمقاولات العامة والنقل), an engineering and contracting enterprise based in Abu Dhabi, United Arab Emirates.

---

## Overview

AQAR LAND delivers disciplined general contracting, preventive building maintenance, and civil execution across Abu Dhabi and the UAE. This web platform showcases the company's verified project portfolio, engineering disciplines, quality standards, and direct client consultation channels in both English and Arabic.

---

## Features

- **Bilingual Experience**: Full English (`en`) and Arabic (`ar`) localization.
- **Bi-Directional RTL/LTR**: Dynamic `dir="rtl"` layout alignment, logical spacing, and mirrored iconography.
- **Light / Dark Theme**: High-contrast architectural themes with zero flash-of-unstyled-theme on load.
- **Responsive Design**: Designed for viewports from 360px mobile devices to 1440px+ ultra-wide displays.
- **Company Profile**: Verified corporate credentials, mission, vision, and Abu Dhabi headquarters details.
- **Six Core Services**: Clear breakdown of general contracting, maintenance, and technical disciplines.
- **Verified Project Portfolio**: Curated residential construction and architectural modification projects.
- **Contact & Inquiry System**: Server-side SMTP delivery with client/server validation and honeypot protection.
- **SEO & Social Share**: Complete OpenGraph, Twitter cards, meta tags, and alternate hreflang support.
- **Structured Data (JSON-LD)**: Schema.org `GeneralContractor` and `Organization` markup.
- **Sitemap & Robots**: Dynamic `sitemap.xml` and `robots.txt` generation.
- **Accessibility (WCAG 2.2 AA)**: Skip link, semantic hierarchy, keyboard focus indicators, and screen-reader alerts.
- **Performance Optimized**: Zero-CLS image containers, pruned font weights, and static generation.

---

## Core Services

1. **General Contracting** (`المقاولات العامة`): Comprehensive structural execution, civil engineering works, and turnkey construction management.
2. **Building Maintenance** (`صيانة المباني`): Preventive and corrective building upkeep, MEP servicing, and envelope preservation.
3. **Support Services** (`الخدمات المساندة`): Logistics coordination, site assistance, and operational auxiliary support.
4. **Project Management** (`إدارة المشاريع`): Milestone scheduling, budget administration, on-site supervision, and stakeholder coordination.
5. **Design & Structural Analysis** (`التصميم والتحليل الإنشائي`): Architectural planning, structural load verification, and authority compliance.
6. **Project Execution** (`تنفيذ المشاريع`): Phased milestone tracking, contractor coordination, and handover supervision.

---

## Technology

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI & Icons**: React 19, Lucide React
- **Email Delivery**: Nodemailer (Server-side SMTP)
- **Typography**: Next.js Font (`Playfair Display`, `Plus Jakarta Sans`, `Noto Sans Arabic`)
- **Optimization**: Next.js Image Optimization (`next/image`)

---

## Project Structure

```
├── app/                      # Next.js App Router pages and API routes
│   ├── api/contact/route.ts  # Secure server-side contact inquiry endpoint
│   ├── about/                # Corporate profile and credentials
│   ├── services/             # Six core engineering services
│   ├── projects/             # Verified residential project portfolio
│   ├── quality/              # Quality assurance and approach
│   ├── contact/              # Interactive inquiry form & HQ details
│   ├── privacy-policy/       # Privacy documentation
│   ├── terms-conditions/     # Terms of use
│   ├── layout.tsx            # Root layout, theme scripts, and font providers
│   ├── page.tsx              # Architectural homepage
│   ├── robots.ts             # Robots.txt crawler directives
│   └── sitemap.ts            # Dynamic sitemap generator
├── components/               # Modular UI components (Navbar, Footer, ContactForm, etc.)
├── lib/                      # Data schemas, translations, and theme/language contexts
│   ├── company-data.ts       # Verified single source of truth for company details & projects
│   ├── translations.ts       # English and Arabic UI translation dictionaries
│   ├── language-context.tsx  # React context for reactive locale switching
│   └── theme-context.tsx     # React context for Light/Dark theme switching
└── public/images/            # Static imagery (hero, projects, services, headquarters)
```

---

## Local Development

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Production Build

```bash
# Verify code syntax and linting
npm run lint

# Compile production build
npm run build

# Start production server
npm start
```

---

## Environment Variables

Configure these variables in your deployment environment (e.g. Vercel Project Settings) to enable real email dispatch for the contact form:

| Variable | Description | Example |
| :--- | :--- | :--- |
| `SMTP_HOST` | Outgoing SMTP server hostname | `smtp.example.com` |
| `SMTP_PORT` | SMTP port (465 for SSL, 587 for TLS) | `465` |
| `SMTP_SECURE` | Use SSL/TLS (`true` for port 465, `false` for 587) | `true` |
| `SMTP_USER` | Authenticated SMTP username / account | `notifications@aqarland.ae` |
| `SMTP_PASS` | Authenticated SMTP account password | `••••••••••••` |
| `SMTP_FROM` | Official sender address in From header | `"AQAR LAND Inquiries" <notifications@aqarland.ae>` |
| `CONTACT_TO_EMAIL` | Destination mailbox for client inquiries | `info@aqarland.ae` |

> *Note: If SMTP variables are omitted, the contact form fails gracefully with user guidance and direct phone/WhatsApp contact links.*

---

## Deployment

The application is configured for continuous deployment via **GitHub → Vercel**:

- **Production Domain Target**: [https://aqarland.ae](https://aqarland.ae)
- **Current Live Preview**: [https://aqarland.vercel.app](https://aqarland.vercel.app)

---

## Content Accuracy

All portfolio records, technical descriptions, and corporate credentials reflect verified AQAR LAND company documentation. No unsupported claims or unverified project categories should be introduced into the repository.

---

## License & Proprietary Rights

All branding, trademarks, architectural photography, and written content are proprietary to **AQAR LAND Contracting & Transporting Est.** All rights reserved.
