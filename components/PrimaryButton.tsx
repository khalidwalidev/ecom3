import Link from 'next/link';
import { ReactNode } from 'react';

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
}

export function PrimaryButton({ href, children, variant = 'primary' }: PrimaryButtonProps) {
  const base =
    variant === 'primary'
      ? 'bg-brand-600 text-white hover:bg-brand-500'
      : 'border border-brand-200 text-brand-700 hover:border-brand-300 hover:text-brand-600';

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${base}`}
    >
      {children}
    </Link>
  );
}
