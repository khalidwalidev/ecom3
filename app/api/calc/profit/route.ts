import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const body = await request.json();
  const settings = await prisma.settings.findFirst();
  const rate = settings?.usdToBdtRate ?? 110;

  const productCost = Number(body.productCostUsd ?? 0);
  const marketingBudget = Number(body.marketingBudgetUsd ?? 0);
  const sellingPrice = Number(body.sellingPriceUsd ?? 0);

  const grossUsd = sellingPrice - (productCost + marketingBudget);

  return NextResponse.json({
    grossUsd,
    grossBdt: grossUsd * rate,
    rate
  });
}
