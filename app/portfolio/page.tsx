import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { prisma } from '@/lib/prisma';

export default async function PortfolioPage() {
  const items = await prisma.portfolioItem.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <section className="section-padding">
      <Container className="space-y-8">
        <SectionHeading
          title="পোর্টফোলিও"
          subtitle="Ready-to-Sell ব্যবসা সেটআপের নির্বাচিত ব্র্যান্ড।"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-brand-200"
            >
              <div
                className="h-40 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${item.coverImageUrl})` }}
              />
              <p className="mt-4 text-sm font-semibold text-slate-900 group-hover:text-brand-600">{item.title}</p>
              <p className="mt-2 text-xs text-slate-500">{item.category}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
