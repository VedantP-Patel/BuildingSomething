import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, Section, Card } from '@/styles/components';

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const TeamMember = styled(Card)`
  text-align: center;

  .name {
    font-weight: 700;
    color: #1a1a1a;
    margin: 1rem 0 0.5rem 0;
  }

  .title {
    color: #0066cc;
    font-size: 0.9rem;
  }
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - TrustVault</title>
        <meta name="description" content="Learn about TrustVault and our mission to transform subscription management." />
      </Head>
      <Container>
        <Section>
          <h1>About TrustVault</h1>
          <p>
            We're building the subscription management platform that users actually trust.
          </p>
        </Section>

        <Section>
          <h2>Our Mission</h2>
          <p>
            Subscription management shouldn't require you to sacrifice your security or privacy. We're committed to
            transforming how people manage their recurring payments by making it transparent, secure, and truly user-first.
          </p>
          <p>
            Our mission is simple: help users save money on unwanted subscriptions while maintaining complete control
            and visibility over every action we take on their behalf.
          </p>
        </Section>

        <Section>
          <h2>Why We Built This</h2>
          <p>
            The subscription economy has created a massive problem: hidden charges, forgotten renewals, and frustrating
            cancellation processes. Users lose billions annually to subscriptions they've forgotten about.
          </p>
          <p>
            But existing solutions ask users to hand over their credentials or operate as black boxes. That's not
            acceptable. Users deserve a platform that's as transparent about its operations as it is secure in its
            design.
          </p>
        </Section>

        <Section>
          <h2>Our Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <Card>
              <h3>🔐 Security</h3>
              <p>We never compromise on security. Your data is protected with industry-leading encryption and practices.</p>
            </Card>
            <Card>
              <h3>👁️ Transparency</h3>
              <p>You should always know what we're doing. Every action is logged and visible.</p>
            </Card>
            <Card>
              <h3>🤝 Trust</h3>
              <p>Trust is earned. We prove it through our practices, not just our promises.</p>
            </Card>
            <Card>
              <h3>💰 User First</h3>
              <p>You're our customer, not our product. Your success is our success.</p>
            </Card>
          </div>
        </Section>
      </Container>
    </>
  );
}
