import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { Container, Section, Card } from '@/styles/components';

export default function Profile({ user }: any) {
  return (
    <>
      <Head>
        <title>Profile - TrustVault</title>
      </Head>
      <Container>
        <Section>
          <h1>Your Profile</h1>
          <Card>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Name:</strong> {user?.name || '—'}</p>
            <p><strong>ID:</strong> {user?.id}</p>
          </Card>
        </Section>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions as any);
  if (!session) {
    return {
      redirect: { destination: '/auth/login', permanent: false },
    };
  }

  return {
    props: { user: session.user },
  };
};
