import { Container } from '@/components/Container';
import { CalculatorTabs } from '@/components/CalculatorTabs';
import { SectionHeading } from '@/components/SectionHeading';

export default function CalculatorsPage() {
  return (
    <section className="section-padding">
      <Container className="space-y-8">
        <SectionHeading
          title="ক্যালকুলেটর"
          subtitle="স্টোরেজ, প্যাকেজিং এবং প্রফিট হিসাব করার জন্য প্রস্তুত টুলস।"
        />
        <CalculatorTabs />
      </Container>
    </section>
  );
}
