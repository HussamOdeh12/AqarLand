import Link from 'next/link';
import { Building2, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
          <Building2 className="h-8 w-8" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            404 - Page Not Found / الصفحة غير موجودة
          </span>
          <h1 className="font-serif text-2xl font-bold text-slate-900 mt-2">
            Aqar Land • عقار لاند
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            The requested page could not be located. Please return to our main directory or explore our core contracting services.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-500 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Return to Homepage / العودة للرئيسية</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
