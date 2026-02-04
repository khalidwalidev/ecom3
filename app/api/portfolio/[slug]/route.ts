import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface RouteContext {
  params: { slug: string };
}

export async function GET(_request: Request, { params }: RouteContext) {
  const item = await prisma.portfolioItem.findUnique({
    where: { slug: params.slug },
    include: { media: true }
  });

  if (!item || !item.published) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(item);
}
