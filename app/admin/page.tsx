import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

const pipeline = [
  'JOINED',
  'MEETING',
  'FINALIZING',
  'LOGO_BRANDING',
  'WEBSITE',
  'SOCIAL_SETUP',
  'PRODUCT_SOURCING_IMPORT',
  'CONTENT_MARKETING',
  'LAUNCHED',
  'FIRST_SALE'
];

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

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== 'ADMIN') {
    return (
      <section className="section-padding">
        <Container className="space-y-4">
          <SectionHeading title="অ্যাডমিন অ্যাক্সেস" subtitle="এই অংশ শুধুমাত্র অ্যাডমিনদের জন্য।" />
          <Link href="/login" className="text-sm font-semibold text-brand-700">
            লগইন পেজে ফিরে যান
          </Link>
        </Container>
      </section>
    );
  }

  const [clients, portfolios, settings] = await Promise.all([
    prisma.client.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.portfolioItem.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.settings.findFirst()
  ]);

  return (
    <section className="section-padding">
      <Container className="space-y-10">
        <SectionHeading title="অ্যাডমিন ড্যাশবোর্ড" subtitle="ক্লায়েন্ট, পোর্টফোলিও এবং সেটিংস ম্যানেজ করুন।" />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">সেটিংস</p>
            <p className="mt-3 text-sm text-slate-600">USD → BDT রেট: {settings?.usdToBdtRate ?? 110}</p>
            <p className="text-sm text-slate-600">
              স্টোরেজ রেট: {settings?.storageRatePerCubicMeterPerMonth ?? 1800} BDT/মিটার
            </p>
            <Link href="/admin/settings" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
              সেটিংস আপডেট করুন →
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">ক্লায়েন্ট সংখ্যা</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">{clients.length}</p>
            <p className="text-sm text-slate-600">প্রতি ক্লায়েন্টের স্ট্যাটাস লগ সংরক্ষিত থাকে।</p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">পোর্টফোলিও</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">{portfolios.length}</p>
            <p className="text-sm text-slate-600">পাবলিশ টগল দিয়ে লাইভ কন্টেন্ট নিয়ন্ত্রণ করুন।</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">ক্লায়েন্ট তালিকা</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {clients.map((client) => (
                <li key={client.id} className="flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-900">{client.name}</p>
                    <p className="text-xs text-slate-500">{client.clientId}</p>
                  </div>
                  <span className="text-xs font-semibold text-brand-700">
                    {statusLabels[client.status] ?? client.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">স্ট্যাটাস পাইপলাইন</p>
            <ol className="mt-4 grid gap-3 md:grid-cols-2">
              {pipeline.map((status, index) => (
                <li key={status} className="rounded-2xl border border-slate-100 px-4 py-3 text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">{index + 1}. </span>
                  {statusLabels[status] ?? status}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
