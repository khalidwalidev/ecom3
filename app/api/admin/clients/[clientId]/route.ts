import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

interface RouteContext {
  params: { clientId: string };
}

export async function GET(_request: Request, { params }: RouteContext) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const client = await prisma.client.findUnique({
    where: { clientId: params.clientId },
    include: { statusHistory: { orderBy: { changedAt: 'desc' } } }
  });

  if (!client) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(client);
}

export async function PATCH(request: Request, { params }: RouteContext) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const existing = await prisma.client.findUnique({ where: { clientId: params.clientId } });

  if (!existing) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  const client = await prisma.client.update({
    where: { clientId: params.clientId },
    data: {
      name: body.name ?? existing.name,
      email: body.email ?? existing.email,
      phone: body.phone ?? existing.phone,
      packageName: body.packageName ?? existing.packageName,
      status: body.status ?? existing.status,
      notes: body.notes ?? existing.notes
    }
  });

  if (body.status && body.status !== existing.status) {
    await prisma.clientStatusHistory.create({
      data: {
        clientId: client.clientId,
        status: body.status,
        changedByUserId: session.user.email ?? 'admin'
      }
    });
  }

  return NextResponse.json(client);
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await prisma.client.delete({ where: { clientId: params.clientId } });
  return NextResponse.json({ success: true });
}
