import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, Section, Button } from '@/styles/components';
import { useRouter } from 'next/router';

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;

  h1 {
    color: white;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`;

const HeroButton = styled(Button)`
  background-color: white;
  color: #0066cc;
  font-weight: 700;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>TrustVault - Building User Trust: Security, Privacy, and Transparency</title>
        <meta
          name="description"
          content="A secure subscription management platform built on principles of transparency, security, and user privacy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeroSection>
        <Container>
          <h1>Building User Trust</h1>
          <p>Security, Privacy, and Transparency in Subscription Management</p>
          <HeroButton onClick={() => router.push('/auth/register')}>
            Get Started
          </HeroButton>
        </Container>
      </HeroSection>

      <Container>
        <Section>
          <h2>Our Commitment</h2>
          <p>
            TrustVault is built on the principle that trust must be earned, not assumed. We've designed every aspect
            of our platform to prioritize your security, privacy, and complete transparency about how your data is
            handled.
          </p>
        </Section>

        <h2>Core Principles</h2>
        <FeatureGrid>
          <FeatureCard icon="🔒" title="No Banking Credentials" description="Your banking credentials are never shared with us. We use secure open-banking APIs that give you full control over what data we access." />

          <FeatureCard icon="🔐" title="Zero-Knowledge Architecture" description="Sensitive credentials are encrypted on your device. Our servers cannot read them. Decryption happens in isolated, temporary environments that are destroyed after use." />

          <FeatureCard icon="👁️" title="Complete Transparency" description="Every action is recorded and displayed in real time. You can review and approve workflows before execution. No hidden operations." />

          <FeatureCard icon="🛡️" title="Security First" description="SOC 2 Type II certification, GDPR/CCPA compliance, independent security audits, and bug bounty programs ensure ongoing security." />

          <FeatureCard icon="⚙️" title="Aligned Incentives" description="You're our customer, not our product. We don't sell data, build advertising profiles, or share your information with third parties." />

          <FeatureCard icon="📈" title="Gradual Rollout" description="Trust is earned incrementally. We start with discovery and analysis, then gradually unlock more powerful features as you gain confidence." />
        </FeatureGrid>

        <Section style={{ marginTop: '4rem' }}>
          <h2>Ready to Take Control?</h2>
          <p>
            Join thousands of users who've taken control of their subscriptions with confidence. Start for free today.
          </p>
          <Button style={{ marginTop: '1rem' }} onClick={() => router.push('/auth/register')}>
            Create Your Account
          </Button>
        </Section>
      </Container>
    </>
  );
}
