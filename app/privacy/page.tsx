import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <Container className="space-y-4">
        <SectionHeading title="প্রাইভেসি নীতি" subtitle="এই তথ্যগুলো প্লেসহোল্ডার হিসেবে দেওয়া হলো।" />
        <p className="text-sm text-slate-600">
          Deshfiri আপনার ব্যক্তিগত তথ্য নিরাপদ রাখে এবং শুধুমাত্র পরিষেবা প্রদানের জন্য প্রয়োজনীয় তথ্য ব্যবহার করে।
        </p>
      </Container>
    </section>
  );
}
