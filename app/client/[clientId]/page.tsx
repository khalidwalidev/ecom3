import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

interface ClientPageProps {
  params: { clientId: string };
}

export default async function ClientPage({ params }: ClientPageProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    notFound();
  }

  const isAdmin = session.user.role === 'ADMIN';
  const isOwner = session.user.clientId === params.clientId;

  if (!isAdmin && !isOwner) {
    notFound();
  }

  const client = await prisma.client.findUnique({
    where: { clientId: params.clientId },
    include: { statusHistory: { orderBy: { changedAt: 'desc' } } }
  });

  const statusLabels: Record<string, string> = {
    JOINED: 'জয়েন সম্পন্ন',
    MEETING: 'মিটিং',
    FINALIZING: 'ফাইনালাইজিং',
    LOGO_BRANDING: 'লোগো ও ব্র্যান্ডিং',
    WEBSITE: 'ওয়েবসাইট',
    SOCIAL_SETUP: 'সোশ্যাল সেটআপ',
    PRODUCT_SOURCING_IMPORT: 'প্রোডাক্ট সোর্সিং ও ইম্পোর্ট',
    CONTENT_MARKETING: 'কন্টেন্ট ও মার্কেটিং',
    LAUNCHED: 'লঞ্চড',
    FIRST_SALE: 'ফার্স্ট সেল'
  };

  if (!client) {
    notFound();
  }

  return (
    <section className="section-padding">
      <Container className="space-y-8">
        <SectionHeading
          title={`ক্লায়েন্ট পোর্টাল: ${client.name}`}
          subtitle={`প্যাকেজ: ${client.packageName} | বর্তমান স্ট্যাটাস: ${
            statusLabels[client.status] ?? client.status
          }`}
        />

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">অগ্রগতি টাইমলাইন</p>
          <p className="mt-2 text-sm text-slate-600">সর্বশেষ আপডেটগুলো নিচে দেখানো হলো।</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {client.statusHistory.map((history) => (
              <li key={history.id} className="rounded-2xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-900">
                  {statusLabels[history.status] ?? history.status}
                </p>
                <p className="text-xs text-slate-500">{history.changedAt.toDateString()}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-brand-100 bg-brand-50 p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">নোট</p>
          <p className="mt-2">{client.notes ?? 'আপনার জন্য নতুন আপডেট আসলে এখানে দেখা যাবে।'}</p>
        </div>
      </Container>
    </section>
  );
}
