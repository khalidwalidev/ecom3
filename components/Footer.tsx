import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-slate-900">Deshfiri</p>
            <p className="mt-3 text-sm text-slate-600">
              Ready-to-Sell ই-কমার্স ব্যবসা সেটআপের জন্য সম্পূর্ণ সহযাত্রী।
            </p>
          </div>
          <div className="text-sm text-slate-600">
            <p className="font-semibold text-slate-800">লিংক</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/about">আমাদের সম্পর্কে</Link>
              </li>
              <li>
                <Link href="/portfolio">পোর্টফোলিও</Link>
              </li>
              <li>
                <Link href="/calculators">ক্যালকুলেটর</Link>
              </li>
              <li>
                <Link href="/login">লগইন</Link>
              </li>
            </ul>
          </div>
          <div className="text-sm text-slate-600">
            <p className="font-semibold text-slate-800">নীতি</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/privacy">প্রাইভেসি</Link>
              </li>
              <li>
                <Link href="/terms">টার্মস</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Deshfiri. সর্বস্বত্ব সংরক্ষিত।</p>
      </Container>
    </footer>
  );
}
