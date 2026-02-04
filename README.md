# Deshfiri (Bangla Full-Stack Platform)

বাংলা ভাষায় প্রস্তুত Ready-to-Sell ই-কমার্স ব্যবসা সেটআপ প্ল্যাটফর্ম। Next.js App Router, NextAuth (Credentials), PostgreSQL, Prisma এবং Tailwind CSS ব্যবহার করা হয়েছে।

## ফিচারসমূহ
- Ready-to-Sell Business Setup ল্যান্ডিং পেজ (Bangla only)
- About Us, Portfolio, Calculators
- Admin panel (ক্লায়েন্ট, পোর্টফোলিও, সেটিংস)
- Client portal (স্ট্যাটাস ও ইতিহাস)
- SEO metadata, OpenGraph, sitemap, robots

## টেক স্ট্যাক
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- PostgreSQL + Prisma ORM
- NextAuth (Credentials)

## লোকাল সেটআপ
1. পরিবেশ ভ্যারিয়েবল কপি করুন:
   ```bash
   cp .env.example .env
   ```
2. ডাটাবেস কনফিগার করুন এবং মাইগ্রেশন চালান:
   ```bash
   npm install
   npx prisma migrate dev --name init
   npm run seed
   ```
3. ডেভ সার্ভার চালু করুন:
   ```bash
   npm run dev
   ```

## লগইন
- অ্যাডমিন ইউজার seed থেকে তৈরি হয়। `.env` ফাইলে ADMIN_EMAIL/ADMIN_PASSWORD সেট করুন।

## নোট
- পাবলিক কোনো ফর্ম নেই। যোগাযোগ শুধুমাত্র ফোন/ইমেইলের মাধ্যমে।
