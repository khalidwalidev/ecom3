import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';

export default function TermsPage() {
  return (
    <section className="section-padding">
      <Container className="space-y-4">
        <SectionHeading title="টার্মস ও শর্তাবলী" subtitle="এই পৃষ্ঠাটি প্রাথমিক প্লেসহোল্ডার।" />
        <p className="text-sm text-slate-600">
          পরিষেবা গ্রহণের আগে আমাদের টিমের সাথে বিস্তারিত শর্তাবলী আলোচনা করুন।
        </p>
      </Container>
    </section>
  );
}
