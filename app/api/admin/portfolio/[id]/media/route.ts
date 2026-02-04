import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

interface RouteContext {
  params: { id: string };
}

export async function POST(request: Request, { params }: RouteContext) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const media = await prisma.portfolioMedia.create({
    data: {
      portfolioItemId: params.id,
      type: body.type,
      url: body.url,
      caption: body.caption,
      sortOrder: body.sortOrder ?? 0
    }
  });

  return NextResponse.json(media, { status: 201 });
}
