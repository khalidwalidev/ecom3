import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { prisma } from '@/lib/prisma';

interface PortfolioDetailProps {
  params: { slug: string };
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailProps) {
  const item = await prisma.portfolioItem.findUnique({
    where: { slug: params.slug },
    include: { media: true }
  });

  if (!item || !item.published) {
    notFound();
  }

  return (
    <section className="section-padding">
      <Container className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold text-brand-700">{item.category}</p>
          <h1 className="text-3xl font-semibold text-slate-900">{item.title}</h1>
          <p className="text-sm text-slate-600">ক্লায়েন্ট: {item.clientName}</p>
        </div>
        <div
          className="h-64 rounded-3xl bg-cover bg-center"
          style={{ backgroundImage: `url(${item.coverImageUrl})` }}
        />
        <p className="text-sm text-slate-600">{item.description}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {item.media.map((media) => (
            <div key={media.id} className="rounded-2xl border border-slate-100 bg-white p-4">
              <p className="text-xs font-semibold text-slate-700">{media.type}</p>
              <a href={media.url} target="_blank" rel="noreferrer" className="mt-2 block text-sm text-brand-700">
                {media.caption ?? 'মিডিয়া দেখুন'}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
