import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

interface RouteContext {
  params: { id: string };
}

export async function PATCH(request: Request, { params }: RouteContext) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const item = await prisma.portfolioItem.update({
    where: { id: params.id },
    data: {
      title: body.title,
      slug: body.slug,
      clientName: body.clientName,
      category: body.category,
      tags: body.tags,
      description: body.description,
      coverImageUrl: body.coverImageUrl,
      published: body.published
    }
  });

  return NextResponse.json(item);
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await prisma.portfolioItem.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
