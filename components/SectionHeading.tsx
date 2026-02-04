import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: ReactNode;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h2>
      {subtitle && <p className="text-sm text-slate-600 md:text-base">{subtitle}</p>}
    </div>
  );
}
