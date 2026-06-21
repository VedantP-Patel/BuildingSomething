import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, Section, Card, Button } from '@/styles/components';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const isLoggedIn = false; // In production, check actual auth state

  if (!isLoggedIn) {
    return (
      <>
        <Head>
          <title>Dashboard - TrustVault</title>
        </Head>
        <Container>
          <Section>
            <h1>Dashboard</h1>
            <p>Please log in to access your dashboard.</p>
            <Button onClick={() => router.push('/auth/login')}>
              Log In
            </Button>
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
          <h1>Welcome to Your Dashboard</h1>
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
            <div className="stat-number">0</div>
          </StatsCard>
          <StatsCard>
            <div className="stat-label">Potential Annual Savings</div>
            <div className="stat-number">$0</div>
          </StatsCard>
          <StatsCard>
            <div className="stat-label">Cancellations Completed</div>
            <div className="stat-number">0</div>
          </StatsCard>
        </DashboardGrid>

        <Section>
          <h2>Get Started</h2>
          <p>
            To begin, connect your bank account securely through our open-banking partners. We'll scan for active
            subscriptions and show you opportunities to save.
          </p>
          <Button style={{ marginTop: '1rem' }}>
            Connect Your Bank Account
          </Button>
        </Section>

        <Section>
          <h2>Your Audit Trail</h2>
          <p>
            All actions taken on your behalf are logged here. You have complete visibility and control over every
            operation.
          </p>
          <Card>
            <p style={{ color: '#999', textAlign: 'center' }}>No actions yet.</p>
          </Card>
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
