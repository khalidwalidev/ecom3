import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const settings = await prisma.settings.findFirst();
  return NextResponse.json(settings);
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const settings = await prisma.settings.upsert({
    where: { id: 'default-settings' },
    update: {
      usdToBdtRate: body.usdToBdtRate,
      storageRatePerCubicMeterPerMonth: body.storageRatePerCubicMeterPerMonth,
      packagingDefaults: body.packagingDefaults
    },
    create: {
      id: 'default-settings',
      usdToBdtRate: body.usdToBdtRate,
      storageRatePerCubicMeterPerMonth: body.storageRatePerCubicMeterPerMonth,
      packagingDefaults: body.packagingDefaults
    }
  });

  return NextResponse.json(settings);
}
