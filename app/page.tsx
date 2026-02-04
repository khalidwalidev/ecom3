import Link from 'next/link';
import { Container } from '@/components/Container';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SectionHeading } from '@/components/SectionHeading';

const services = [
  'ব্র্যান্ডিং (নেমিং/লোগো/গাইডলাইন)',
  'ফুল ই-কমার্স ওয়েবসাইট (Next.js)',
  'সোশ্যাল মিডিয়া সেটআপ (FB/IG)',
  'প্রোডাক্ট সোর্সিং ও ইম্পোর্ট প্ল্যান',
  'কন্টেন্ট ও মার্কেটিং সিস্টেম',
  'ওয়্যারহাউজিং ও প্যাকেজিং সেটআপ (সহায়তা)'
];

const workflow = [
  'জয়েন',
  'মিটিং',
  'ফাইনালাইজিং',
  'লোগো ও ব্র্যান্ডিং',
  'ওয়েবসাইট',
  'সোশ্যাল সেটআপ',
  'প্রোডাক্ট সোর্সিং ও ইম্পোর্ট',
  'কন্টেন্ট ও মার্কেটিং',
  'লঞ্চড',
  'ফার্স্ট সেল'
];

export default function HomePage() {
  return (
    <div>
      <section className="section-padding">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700">
              Ready-to-Sell Business Setup
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
              Deshfiri-এর সাথে আপনি Ready-to-Sell ই-কমার্স ব্যবসা সেটআপ করুন
            </h1>
            <p className="text-base text-slate-600 md:text-lg">
              বিদেশে বা বাংলাদেশে—আপনার জন্য ব্র্যান্ডিং থেকে ওয়েবসাইট, সোশ্যাল সেটআপ, প্রোডাক্ট সোর্সিং ও লঞ্চ পর্যন্ত পূর্ণ সেটআপ।
            </p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="/#portfolio">পোর্টফোলিও দেখুন</PrimaryButton>
              <PrimaryButton href="/#contact" variant="ghost">
                যোগাযোগ
              </PrimaryButton>
            </div>
          </div>
          <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-brand-700">ফিচার্ড সারাংশ</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>✅ Ready-to-Sell পরিকল্পনা ও বাস্তবায়ন</li>
                <li>✅ ব্র্যান্ডিং থেকে লঞ্চ পর্যন্ত এক টিম</li>
                <li>✅ প্রবাসী ও বাংলাদেশি উদ্যোক্তাদের জন্য কাস্টম গাইডেন্স</li>
              </ul>
              <Link href="/about" className="inline-flex text-sm font-semibold text-brand-700">
                আমাদের সম্পর্কে জানুন →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-slate-50">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <SectionHeading
              title="আমাদের সম্পর্কে"
              subtitle="Deshfiri আপনার Ready-to-Sell ই-কমার্স ব্যবসা নির্মাণে হাতে-কলমে সহায়তা দেয়—প্রবাসী ও বাংলাদেশের উদ্যোক্তাদের জন্য।"
            />
            <p className="text-sm text-slate-600">
              আমরা ব্র্যান্ড স্ট্র্যাটেজি, প্রযুক্তি, অপারেশনস এবং মার্কেটিং একসাথে এনে এমন একটি টিম তৈরি করেছি যারা আপনার ব্যবসাকে দ্রুত বাজারে আনতে কাজ করে।
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Ready-to-Sell মানে কী?</p>
            <p className="mt-3 text-sm text-slate-600">
              আপনি পণ্য প্রস্তুত রেখে সেল শুরু করতে পারবেন—ব্র্যান্ডিং, ওয়েবসাইট, সোশ্যাল ও সোর্সিং সম্পন্ন অবস্থায়।
            </p>
            <Link href="/about" className="mt-5 inline-flex text-sm font-semibold text-brand-700">
              বিস্তারিত জানুন →
            </Link>
          </div>
        </Container>
      </section>

      <section id="program" className="section-padding">
        <Container className="space-y-8">
          <SectionHeading
            title="ই-কমার্স বিজনেস বিল্ডিং প্রোগ্রাম"
            subtitle="৪টি লাইভ সেশন / ১ মাস। পুরো রোডম্যাপ, কৌশল ও বাস্তবায়ন গাইড।"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'নেমিং ও লোগো প্ল্যান',
              'ফেসবুক পেজ ও কনটেন্ট সেটআপ',
              'ফুল ওয়েবসাইট ক্রিয়েশন',
              'সোর্সিং ও ইম্পোর্ট পরিকল্পনা',
              'কন্টেন্ট ও প্যাকেজিং গাইড',
              'মার্কেটিং স্ট্র্যাটেজি ও লঞ্চ প্ল্যান'
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="section-padding bg-slate-50">
        <Container className="space-y-8">
          <SectionHeading
            title="Ready-to-Sell Business Setup"
            subtitle="আপনার জন্য এমন একটি ব্যবসা সেটআপ যা প্রস্তুত অবস্থায় সেল শুরু করতে পারে।"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{service}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="packages" className="section-padding">
        <Container className="space-y-8">
          <SectionHeading
            title="প্যাকেজ"
            subtitle="আপনার প্রয়োজন অনুযায়ী স্টার্টার থেকে প্রো পর্যন্ত পরিকল্পনা। মূল্য নির্ধারণের জন্য আমাদের সাথে যোগাযোগ করুন।"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { name: 'Starter', desc: 'শুরু করার জন্য প্রয়োজনীয় বেসিক সেটআপ।' },
              { name: 'Growth', desc: 'ব্র্যান্ডিং ও মার্কেটিং সহ পূর্ণাঙ্গ প্রস্তুতি।' },
              { name: 'Pro', desc: 'স্কেল করার জন্য এন্ড-টু-এন্ড সাপোর্ট।' }
            ].map((plan) => (
              <div key={plan.name} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                <p className="text-lg font-semibold text-slate-900">{plan.name}</p>
                <p className="mt-3 text-sm text-slate-600">{plan.desc}</p>
                <Link href="/#contact" className="mt-6 inline-flex rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700">
                  যোগাযোগ করুন
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="workflow" className="section-padding bg-slate-50">
        <Container className="space-y-8">
          <SectionHeading
            title="কীভাবে কাজ করে"
            subtitle="প্রতিটি ধাপে স্বচ্ছ রিপোর্টিং ও ফিডব্যাক নিশ্চিত করা হয়।"
          />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {workflow.map((step, index) => (
              <li key={step} className="rounded-2xl border border-slate-100 bg-white p-4 text-sm text-slate-700">
                <p className="text-xs font-semibold text-brand-700">ধাপ {index + 1}</p>
                <p className="mt-2 font-semibold text-slate-900">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="portfolio" className="section-padding">
        <Container className="space-y-6">
          <SectionHeading
            title="পোর্টফোলিও"
            subtitle="রেডি-টু-সেল ব্র্যান্ড সেটআপের নির্বাচিত কাজগুলো দেখুন।"
          />
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/portfolio" className="inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white">
              সব পোর্টফোলিও দেখুন
            </Link>
            <Link href="/calculators" className="text-sm font-semibold text-brand-700">
              ক্যালকুলেটর ব্যবহার করুন →
            </Link>
          </div>
        </Container>
      </section>

      <section id="contact" className="section-padding bg-slate-50">
        <Container className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <SectionHeading
              title="যোগাযোগ"
              subtitle="প্রশ্ন থাকলে এখনই যোগাযোগ করুন। কোনো ফর্ম নেই—শুধু সরাসরি যোগাযোগ।"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">ফোন / WhatsApp</p>
                <a href="tel:+8801700000000" className="mt-2 block">
                  +880 17 0000 0000
                </a>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">ইমেইল</p>
                <a href="mailto:hello@deshfiri.com" className="mt-2 block">
                  hello@deshfiri.com
                </a>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">অফিস ঠিকানা</p>
                <p className="mt-2">ঢাকা, বাংলাদেশ (প্লেসহোল্ডার)</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">ব্যবসার সময়</p>
                <p className="mt-2">রবিবার - বৃহস্পতিবার, সকাল ১০টা - সন্ধ্যা ৬টা</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-6 text-sm text-slate-600">
            <p className="text-sm font-semibold text-slate-900">ম্যাপ</p>
            <div className="mt-4 flex h-48 items-center justify-center rounded-2xl bg-slate-100 text-xs text-slate-500">
              এমবেডেড ম্যাপ প্লেসহোল্ডার
            </div>
            <p className="mt-4 text-xs">Google Maps বা অন্য ম্যাপ এমবেড করার জন্য প্লেসহোল্ডার।</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
