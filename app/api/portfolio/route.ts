import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const items = await prisma.portfolioItem.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(items);
}
