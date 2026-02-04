import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  if (session.user.role === 'ADMIN') {
    return NextResponse.json({ role: 'ADMIN' });
  }

  if (!session.user.clientId) {
    return NextResponse.json({ message: 'No client linked' }, { status: 404 });
  }

  const client = await prisma.client.findUnique({
    where: { clientId: session.user.clientId },
    include: { statusHistory: { orderBy: { changedAt: 'desc' } } }
  });

  return NextResponse.json(client);
}
