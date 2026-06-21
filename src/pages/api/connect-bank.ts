import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { getServerSession } = await import('next-auth/next');
    const { authOptions } = await import('./auth/[...nextauth]');

    const session = await getServerSession(req, res, authOptions as any);
    if (!session) return res.status(401).json({ error: 'Unauthorized' });

    // Create a mock institution
    const institution = await prisma.institution.create({
      data: {
        userId: session.user!.id as string,
        name: 'Mock Bank',
        accessToken: 'mocked-token-' + Date.now(),
      },
    });

    // Create 3 fake subscriptions for this user
    const merchants = [
      { merchantName: 'StreamFlix', amount: 12.99 },
      { merchantName: 'MusicNow', amount: 9.99 },
      { merchantName: 'CloudStorage Pro', amount: 4.99 },
      { merchantName: 'DailyNews+', amount: 6.5 },
    ];

    const subscriptions = await Promise.all(
      merchants.slice(0, 3).map((m) =>
        prisma.subscription.create({
          data: {
            userId: session.user!.id as string,
            institutionId: institution.id,
            merchantName: m.merchantName,
            amount: m.amount,
            billingCycle: 'MONTHLY',
            status: 'ACTIVE',
          },
        })
      )
    );

    // Log the connect action
    await prisma.auditLog.create({
      data: {
        userId: session.user!.id as string,
        action: 'connect_bank',
        details: `Connected ${institution.name} and seeded ${subscriptions.length} subscriptions`,
      },
    });

    return res.status(201).json({ institution, subscriptions });
  } catch (err) {
    console.error('connect-bank error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
