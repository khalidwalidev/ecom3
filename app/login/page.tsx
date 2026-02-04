import { Container } from '@/components/Container';
import { LoginForm } from '@/components/LoginForm';
import { SectionHeading } from '@/components/SectionHeading';

export default function LoginPage() {
  return (
    <section className="section-padding">
      <Container className="max-w-xl space-y-6">
        <SectionHeading title="লগইন" subtitle="অ্যাডমিন ও ক্লায়েন্ট পোর্টাল অ্যাক্সেস করুন।" />
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <LoginForm />
        </div>
      </Container>
    </section>
  );
}
