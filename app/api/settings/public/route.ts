import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const settings = await prisma.settings.findFirst();
  return NextResponse.json({
    usdToBdtRate: settings?.usdToBdtRate ?? 110,
    storageRatePerCubicMeterPerMonth: settings?.storageRatePerCubicMeterPerMonth ?? 1800,
    packagingDefaults: settings?.packagingDefaults ?? { boxCost: 25, polyCost: 8, tapeCost: 6 }
  });
}
