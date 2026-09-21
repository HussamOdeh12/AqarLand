import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F5F0] dark:bg-[#181A1B] px-6 py-20">
      <div className="max-w-md w-full text-center space-y-6 border border-[#E2DED6] dark:border-[#2C2F33] bg-[#EFECE6]/40 dark:bg-[#2C2F33]/20 p-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32] block">
          404 • PAGE NOT FOUND / الصفحة غير موجودة
        </span>
        <h1 className="font-serif text-3xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
          Aqar Land • عقار لاند
        </h1>
        <p className="text-sm text-[#2C2F33]/80 dark:text-[#E2DED6]/80 font-sans leading-relaxed">
          The requested engineering record or page could not be located. Please return to the homepage or explore our verified contracting disciplines.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full bg-[#C85A32] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#B84D28] transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Return to Overview / العودة للرئيسية</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
