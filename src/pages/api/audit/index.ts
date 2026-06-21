import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { getServerSession } = await import('next-auth/next');
    const { authOptions } = await import('../auth/[...nextauth]');

    const session = await getServerSession(req, res, authOptions as any);
    if (!session) return res.status(401).json({ error: 'Unauthorized' });

    if (req.method === 'GET') {
      const logs = await prisma.auditLog.findMany({
        where: { userId: session.user!.id as string },
        orderBy: { timestamp: 'desc' },
        take: 50,
      });
      return res.json({ logs });
    }

    return res.status(405).end();
  } catch (err) {
    console.error('audit api error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
