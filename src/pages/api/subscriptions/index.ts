import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { getServerSession } = await import('next-auth/next');
    const { authOptions } = await import('../auth/[...nextauth]');

    const session = await getServerSession(req, res, authOptions as any);
    if (!session) return res.status(401).json({ error: 'Unauthorized' });

    if (req.method === 'GET') {
      const subs = await prisma.subscription.findMany({
        where: { userId: session.user!.id as string },
        include: { institution: true },
        orderBy: { createdAt: 'desc' },
      });

      // Compute simple stats
      const total = subs.length;
      const potentialAnnualSavings = subs.reduce((acc, s) => {
        const annual = s.billingCycle === 'MONTHLY' ? s.amount * 12 : s.amount;
        return acc + annual * 0.1; // assume 10% potential savings as placeholder
      }, 0);

      return res.json({ subscriptions: subs, stats: { total, potentialAnnualSavings } });
    }

    return res.status(405).end();
  } catch (err) {
    console.error('subscriptions api error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
