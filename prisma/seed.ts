import { PrismaClient, ClientPipelineStatus, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@deshfiri.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin1234';
  const adminName = process.env.ADMIN_NAME || 'ডেসফিরি অ্যাডমিন';

  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { name: adminName, passwordHash, role: Role.ADMIN },
    create: {
      name: adminName,
      email: adminEmail,
      passwordHash,
      role: Role.ADMIN
    }
  });

  const client = await prisma.client.upsert({
    where: { clientId: 'DSF-0001' },
    update: {},
    create: {
      clientId: 'DSF-0001',
      name: 'আরিফ হোসেন',
      email: 'arif@example.com',
      phone: '+8801710000000',
      packageName: 'Growth',
      status: ClientPipelineStatus.WEBSITE,
      notes: 'ক্লায়েন্টের সোর্সিং প্ল্যান প্রস্তুত হচ্ছে।'
    }
  });

  await prisma.clientStatusHistory.create({
    data: {
      clientId: client.clientId,
      status: client.status,
      changedByUserId: 'seed'
    }
  });

  await prisma.portfolioItem.upsert({
    where: { slug: 'lunar-bags' },
    update: { published: true },
    create: {
      title: 'লুনার ব্যাগস',
      slug: 'lunar-bags',
      clientName: 'লুনার ব্যাগস',
      category: 'ফ্যাশন',
      tags: ['ব্র্যান্ডিং', 'ওয়েবসাইট', 'সোশ্যাল'],
      description: 'প্রবাসী উদ্যোক্তার জন্য রেডি-টু-সেল ব্যাগ ব্র্যান্ড সেটআপ।',
      coverImageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
      published: true,
      media: {
        create: [
          {
            type: 'IMAGE',
            url: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop',
            caption: 'লুকবুক ভিজ্যুয়াল',
            sortOrder: 1
          }
        ]
      }
    }
  });

  await prisma.settings.upsert({
    where: { id: 'default-settings' },
    update: {
      usdToBdtRate: 110,
      storageRatePerCubicMeterPerMonth: 1800,
      packagingDefaults: {
        boxCost: 25,
        polyCost: 8,
        tapeCost: 6
      }
    },
    create: {
      id: 'default-settings',
      usdToBdtRate: 110,
      storageRatePerCubicMeterPerMonth: 1800,
      packagingDefaults: {
        boxCost: 25,
        polyCost: 8,
        tapeCost: 6
      }
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
