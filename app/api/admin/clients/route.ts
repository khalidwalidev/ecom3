import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const clients = await prisma.client.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(clients);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const client = await prisma.client.create({
    data: {
      clientId: body.clientId,
      name: body.name,
      email: body.email,
      phone: body.phone,
      packageName: body.packageName,
      status: body.status,
      notes: body.notes
    }
  });

  await prisma.clientStatusHistory.create({
    data: {
      clientId: client.clientId,
      status: client.status,
      changedByUserId: session.user.email ?? 'admin'
    }
  });

  return NextResponse.json(client, { status: 201 });
}
