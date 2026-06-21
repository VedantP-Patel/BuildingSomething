import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, Section, Card, Button } from '@/styles/components';
import { useSession } from 'next-auth/react';

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const StatsCard = styled(Card)`
  text-align: center;

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0066cc;
    margin: 1rem 0;
  }

  .stat-label {
    color: #666;
    font-size: 0.95rem;
  }
`;

const AlertBox = styled.div`
  background-color: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 1.5rem;
  border-radius: 4px;
  margin-bottom: 2rem;

  p {
    margin: 0;
    color: #856404;
  }
`;

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [subscriptions, setSubscriptions] = React.useState<any[]>([]);
  const [stats, setStats] = React.useState<{ total: number; potentialAnnualSavings: number }>({ total: 0, potentialAnnualSavings: 0 });
  const [logs, setLogs] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (status !== 'authenticated') return;
    fetchData();
  }, [status]);

  async function fetchData() {
    setLoading(true);
    try {
      const subsRes = await fetch('/api/subscriptions');
      if (subsRes.ok) {
        const json = await subsRes.json();
        setSubscriptions(json.subscriptions || []);
        setStats(json.stats || { total: 0, potentialAnnualSavings: 0 });
      }

      const auditRes = await fetch('/api/audit');
      if (auditRes.ok) {
        const j = await auditRes.json();
        setLogs(j.logs || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function connectBank() {
    setLoading(true);
    try {
      const res = await fetch('/api/connect-bank', { method: 'POST' });
      if (res.ok) {
        await fetchData();
      } else {
        console.error('Connect bank failed');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function cancelSubscription(id: string) {
    if (!confirm('Cancel this subscription?')) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/subscriptions/${id}/cancel`, { method: 'POST' });
      if (res.ok) await fetchData();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (status === 'loading') {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  if (!session) {
    return (
      <>
        <Head>
          <title>Dashboard - TrustVault</title>
        </Head>
        <Container>
          <Section>
            <h1>Access Denied</h1>
            <p>Please log in to view this page.</p>
          </Section>
        </Container>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Dashboard - TrustVault</title>
      </Head>
      <Container>
        <Section>
          <h1>Welcome, {session.user?.name || session.user?.email}!</h1>
          <p>Manage your subscriptions with confidence.</p>
        </Section>
        <AlertBox>
          <p>
            <strong>Welcome!</strong> This is a demo dashboard. Your actual subscriptions and savings will appear
            here once you've connected your accounts.
          </p>
        </AlertBox>

        <DashboardGrid>
          <StatsCard>
            <div className="stat-label">Total Subscriptions</div>
            <div className="stat-number">{stats.total}</div>
          </StatsCard>
          <StatsCard>
            <div className="stat-label">Potential Annual Savings</div>
            <div className="stat-number">${stats.potentialAnnualSavings.toFixed(2)}</div>
          </StatsCard>
          <StatsCard>
            <div className="stat-label">Cancellations Completed</div>
            <div className="stat-number">{logs.filter((l) => l.action === 'cancel_subscription').length}</div>
          </StatsCard>
        </DashboardGrid>

        <Section>
          <h2>Get Started</h2>
          <p>
            To begin, connect your bank account securely through our open-banking partners. We'll scan for active
            subscriptions and show you opportunities to save.
          </p>
          <Button style={{ marginTop: '1rem' }} onClick={connectBank} disabled={loading}>
            {loading ? 'Connecting…' : 'Connect Your Bank Account'}
          </Button>
        </Section>

        <Section>
          <h2>Your Subscriptions</h2>
          {subscriptions.length === 0 ? (
            <Card>
              <p style={{ color: '#999', textAlign: 'center' }}>No subscriptions found. Connect a bank to seed demo data.</p>
            </Card>
          ) : (
            subscriptions.map((s) => (
              <Card key={s.id} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong>{s.merchantName}</strong>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>{s.billingCycle} — ${s.amount}</div>
                    <div style={{ fontSize: '0.85rem', color: '#888' }}>{s.institution?.name || 'Manual'}</div>
                  </div>
                  <div>
                    <div style={{ textAlign: 'right' }}>{s.status}</div>
                    {s.status === 'ACTIVE' && (
                      <Button onClick={() => cancelSubscription(s.id)} disabled={loading} style={{ marginTop: '0.5rem' }}>Cancel</Button>
                    )}
                  </div>
                </div>
              </Card>
            ))
          )}
        </Section>

        <Section>
          <h2>Your Audit Trail</h2>
          {logs.length === 0 ? (
            <Card>
              <p style={{ color: '#999', textAlign: 'center' }}>No actions yet.</p>
            </Card>
          ) : (
            logs.map((l) => (
              <Card key={l.id} style={{ marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <strong>{l.action.replace('_', ' ')}</strong>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>{l.details}</div>
                  </div>
                  <div style={{ color: '#999' }}>{new Date(l.timestamp).toLocaleString()}</div>
                </div>
              </Card>
            ))
          )}
        </Section>
      </Container>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { getServerSession } = await import('next-auth/next');
  const { authOptions } = await import('./api/auth/[...nextauth]');

  const session = await getServerSession(context.req, context.res, authOptions as any);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
}