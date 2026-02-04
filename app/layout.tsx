import type { Metadata } from 'next';
import { Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const bengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Deshfiri | Ready-to-Sell ই-কমার্স ব্যবসা সেটআপ',
  description:
    'Deshfiri-এর সাথে Ready-to-Sell ই-কমার্স ব্যবসা সেটআপ করুন—ব্র্যান্ডিং থেকে ওয়েবসাইট, সোশ্যাল সেটআপ, সোর্সিং ও লঞ্চ পর্যন্ত পূর্ণ সমাধান।',
  metadataBase: new URL('https://deshfiri.example.com'),
  openGraph: {
    title: 'Deshfiri | Ready-to-Sell ই-কমার্স ব্যবসা সেটআপ',
    description:
      'ব্র্যান্ডিং, ওয়েবসাইট, সোশ্যাল সেটআপ, প্রোডাক্ট সোর্সিং ও লঞ্চ পর্যন্ত Ready-to-Sell সমাধান।',
    type: 'website',
    url: 'https://deshfiri.example.com'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={bengali.className}>
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
