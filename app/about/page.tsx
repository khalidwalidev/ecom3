import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';

export default function AboutPage() {
  return (
    <section className="section-padding">
      <Container className="space-y-10">
        <SectionHeading
          title="আমাদের সম্পর্কে"
          subtitle="Deshfiri তৈরি হয়েছে Ready-to-Sell ই-কমার্স ব্যবসা সেটআপের জন্য।"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              আমাদের মিশন হলো প্রবাসী ও বাংলাদেশের উদ্যোক্তাদের জন্য এমন একটি পূর্ণাঙ্গ সমাধান তৈরি করা, যেখানে ব্র্যান্ডিং থেকে ওয়েবসাইট, সোশ্যাল সেটআপ, সোর্সিং ও মার্কেটিং—সব এক জায়গায় পাওয়া যায়।
            </p>
            <p>
              আমরা একটি অভিজ্ঞ টিম হিসেবে Ready-to-Sell সেটআপের প্রতিটি ধাপ বাস্তবায়ন করি এবং আপনাকে দ্রুত বাজারে প্রবেশ করতে সাহায্য করি।
            </p>
          </div>
          <div className="space-y-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">ভিশন</p>
            <p>
              বিশ্বব্যাপী বাংলা উদ্যোক্তাদের জন্য প্রযুক্তি ও অপারেশনস ভিত্তিক ব্যবসা সমাধানে শীর্ষ সহযাত্রী হওয়া।
            </p>
            <p className="font-semibold text-slate-900">কারা উপকৃত হন</p>
            <p>
              প্রবাসী ব্যবসায়ীরা যারা বাংলাদেশে বা বিদেশে নতুন ই-কমার্স ব্র্যান্ড শুরু করতে চান এবং স্থানীয় উদ্যোক্তারা যারা দ্রুত স্কেল করতে চান।
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'সম্পূর্ণ Ready-to-Sell ফোকাস',
              desc: 'সেটআপ শেষ করেই সেল শুরু করার মতো প্রস্তুতি।'
            },
            {
              title: 'ডেটা-ড্রিভেন সিদ্ধান্ত',
              desc: 'ক্যালকুলেটর ও রিপোর্টিং দিয়ে ব্যবসার ঝুঁকি কমানো।'
            },
            {
              title: 'অপারেশনস সাপোর্ট',
              desc: 'ওয়্যারহাউজিং, প্যাকেজিং ও সোর্সিং পরিকল্পনায় বাস্তব সহায়তা।'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-brand-100 bg-brand-50 p-8 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">যোগাযোগ করুন</p>
          <p className="mt-3">আপনার Ready-to-Sell পরিকল্পনার জন্য সরাসরি যোগাযোগ করুন। কোনো ফর্ম নেই।</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="tel:+8801700000000" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700">
              +880 17 0000 0000
            </Link>
            <Link href="mailto:hello@deshfiri.com" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700">
              hello@deshfiri.com
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
