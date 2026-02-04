import Link from 'next/link';
import { Container } from './Container';

const navItems = [
  { href: '/about', label: 'আমাদের সম্পর্কে' },
  { href: '/#program', label: 'প্রোগ্রাম' },
  { href: '/#services', label: 'সার্ভিস' },
  { href: '/#packages', label: 'প্যাকেজ' },
  { href: '/#workflow', label: 'কীভাবে কাজ করে' },
  { href: '/portfolio', label: 'পোর্টফোলিও' },
  { href: '/calculators', label: 'ক্যালকুলেটর' },
  { href: '/#contact', label: 'যোগাযোগ' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold text-slate-900">
          Deshfiri
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 lg:flex" aria-label="প্রধান নেভিগেশন">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-600">
              {item.label}
            </Link>
          ))}
          <Link href="/login" className="rounded-full border border-brand-200 px-4 py-2 text-brand-700 hover:border-brand-400">
            লগইন
          </Link>
        </nav>
        <Link href="/login" className="lg:hidden rounded-full border border-brand-200 px-4 py-2 text-sm text-brand-700">
          লগইন
        </Link>
      </Container>
    </header>
  );
}
