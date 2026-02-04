import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export default async function AdminSettingsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== 'ADMIN') {
    return (
      <section className="section-padding">
        <Container className="space-y-4">
          <SectionHeading title="সেটিংস" subtitle="এই অংশ শুধুমাত্র অ্যাডমিনদের জন্য।" />
          <Link href="/login" className="text-sm font-semibold text-brand-700">
            লগইন পেজে ফিরে যান
          </Link>
        </Container>
      </section>
    );
  }

  const settings = await prisma.settings.findFirst();

  return (
    <section className="section-padding">
      <Container className="space-y-6">
        <SectionHeading title="সেটিংস" subtitle="এক্সচেঞ্জ রেট ও ডিফল্ট কনফিগারেশন দেখুন।" />
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm text-sm text-slate-600">
          <p className="font-semibold text-slate-900">USD → BDT রেট</p>
          <p className="mt-2">{settings?.usdToBdtRate ?? 110}</p>
          <p className="mt-4 font-semibold text-slate-900">স্টোরেজ রেট (প্রতি কিউবিক মিটার)</p>
          <p className="mt-2">{settings?.storageRatePerCubicMeterPerMonth ?? 1800}</p>
          <p className="mt-4 font-semibold text-slate-900">প্যাকেজিং ডিফল্ট</p>
          <pre className="mt-2 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">
            {JSON.stringify(settings?.packagingDefaults ?? { boxCost: 25, polyCost: 8, tapeCost: 6 }, null, 2)}
          </pre>
          <p className="mt-4 text-xs text-slate-500">
            সেটিংস আপডেট করতে API ব্যবহার করুন: <code>PATCH /api/admin/settings</code>
          </p>
        </div>
      </Container>
    </section>
  );
}
