import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const item = await prisma.portfolioItem.create({
    data: {
      title: body.title,
      slug: body.slug,
      clientName: body.clientName,
      category: body.category,
      tags: body.tags ?? [],
      description: body.description,
      coverImageUrl: body.coverImageUrl,
      published: body.published ?? false
    }
  });

  return NextResponse.json(item, { status: 201 });
}
