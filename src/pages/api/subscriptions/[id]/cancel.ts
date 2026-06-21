import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { getServerSession } = await import('next-auth/next');
    const { authOptions } = await import('../../auth/[...nextauth]');

    const session = await getServerSession(req, res, authOptions as any);
    if (!session) return res.status(401).json({ error: 'Unauthorized' });

    const { id } = req.query;
    if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' });

    const sub = await prisma.subscription.findUnique({ where: { id } });
    if (!sub || sub.userId !== (session.user!.id as string)) return res.status(404).json({ error: 'Not found' });

    const updated = await prisma.subscription.update({ where: { id }, data: { status: 'CANCELLED' } });

    await prisma.auditLog.create({
      data: {
        userId: session.user!.id as string,
        action: 'cancel_subscription',
        details: `Cancelled subscription ${updated.merchantName} (${updated.id})`,
      },
    });

    return res.json({ subscription: updated });
  } catch (err) {
    console.error('cancel subscription error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
