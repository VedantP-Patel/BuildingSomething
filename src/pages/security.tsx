import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, Section } from '@/styles/components';

const SecurityContent = styled.div`
  max-width: 900px;
  margin: 0 auto;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    color: #0066cc;
    border-bottom: 2px solid #0066cc;
    padding-bottom: 0.5rem;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.8;
    color: #333;
  }

  ul {
    margin-left: 2rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  code {
    background-color: #f5f5f5;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
  }
`;

export default function Security() {
  return (
    <>
      <Head>
        <title>Security & Trust - TrustVault</title>
        <meta
          name="description"
          content="Learn how TrustVault prioritizes security, privacy, and transparency in subscription management."
        />
      </Head>

      <Container>
        <Section>
          <h1>Building User Trust: Security, Privacy, and Transparency</h1>
        </Section>

        <SecurityContent>
          <h2>1. No Access to Banking Credentials</h2>
          <p>
            Users never share their bank usernames or passwords with us.
          </p>
          <p>
            We integrate with open-banking providers such as Plaid, Teller, and TrueLayer, allowing users to
            authenticate directly with their financial institutions through secure authorization flows. We only
            receive revocable, read-only access tokens that permit transaction analysis.
          </p>
          <p>
            Users can revoke access at any time through their bank, without requiring our involvement.
          </p>
          <p>
            To minimize risk, we store only the information necessary for subscription detection—normalized merchant
            names, transaction amounts, and dates. Raw banking data is never permanently stored.
          </p>

          <h2>2. Zero-Knowledge Credential Architecture</h2>
          <p>
            Subscription cancellation occasionally requires access to merchant accounts. To address this securely, we
            employ a zero-knowledge design.
          </p>

          <h3>Client-Side Encryption</h3>
          <p>
            Each user generates a public-private key pair on their device. The private key never leaves the device and
            is stored securely using platform-native security mechanisms.
          </p>
          <p>
            Merchant credentials are encrypted locally before being transmitted. Our servers cannot read or decrypt
            them.
          </p>

          <h3>Ephemeral Execution</h3>
          <p>
            When a cancellation is authorized, credentials are decrypted only within a temporary, isolated execution
            environment. Once the cancellation process completes, the environment and all associated memory are
            permanently destroyed.
          </p>
          <p>No credential copies are retained.</p>

          <h3>Password-Free Alternatives</h3>
          <p>
            Whenever possible, we avoid passwords entirely by using OAuth-based authentication, account-linking
            services, or user-reviewed cancellation emails.
          </p>
          <p>
            Direct login automation is offered only when no safer alternative exists.
          </p>

          <h2>3. Complete Transparency</h2>
          <p>
            Users should always know what actions are being taken on their behalf.
          </p>

          <h3>Live Audit Trail</h3>
          <p>
            Every automated action is recorded and displayed in real time, including navigation steps, button clicks,
            screenshots, and cancellation confirmations.
          </p>

          <h3>Pre-Execution Review</h3>
          <p>
            Before a cancellation begins, users can review the planned workflow and approve, modify, or reject
            individual steps.
          </p>

          <h3>Secure Two-Factor Authentication</h3>
          <p>
            If a merchant requires 2FA verification, automation pauses and requests the code directly from the user.
            We never access the user's authentication devices.
          </p>

          <h2>4. Security and Compliance</h2>
          <p>
            Trust must be verified, not assumed.
          </p>
          <p>
            Our long-term security roadmap includes:
          </p>
          <ul>
            <li>SOC 2 Type II certification</li>
            <li>GDPR and CCPA compliance</li>
            <li>Independent penetration testing</li>
            <li>Public security reports</li>
            <li>Ongoing bug bounty programs</li>
          </ul>
          <p>
            All sensitive data is encrypted in transit and at rest using industry-standard security practices.
          </p>

          <h2>5. Legal and Financial Alignment</h2>
          <p>
            The platform operates strictly as an authorized agent acting on behalf of the user.
          </p>
          <p>
            We provide:
          </p>
          <ul>
            <li>Clear terms defining authorization and responsibilities</li>
            <li>A cancellation guarantee for qualifying failures</li>
            <li>Refunds when our service does not deliver promised value</li>
            <li>Transparent dispute-resolution procedures</li>
          </ul>
          <p>Our incentives remain aligned with user savings and successful outcomes.</p>

          <h2>6. Privacy-First Business Model</h2>
          <p>
            Users are our customers—not our product.
          </p>
          <p>
            We do not:
          </p>
          <ul>
            <li>Sell user data</li>
            <li>Build advertising profiles</li>
            <li>Share spending behavior with third parties</li>
            <li>Track unrelated browsing activity</li>
          </ul>
          <p>
            Transaction data is used solely for subscription identification and management.
          </p>

          <h2>7. Gradual Trust-Based Rollout</h2>
          <p>
            Trust should be earned incrementally.
          </p>

          <h3>Phase 1: Discovery</h3>
          <ul>
            <li>Subscription scanning</li>
            <li>Spending analysis</li>
            <li>Human-written cancellation guides</li>
            <li>No credentials required</li>
          </ul>

          <h3>Phase 2: Assisted Cancellation</h3>
          <ul>
            <li>User-authorized email cancellation</li>
            <li>Draft review before sending</li>
            <li>Minimal permissions</li>
          </ul>

          <h3>Phase 3: Full Automation</h3>
          <ul>
            <li>Secure account automation</li>
            <li>Advanced cancellation workflows</li>
            <li>Proven reliability backed by user trust</li>
          </ul>

          <h2>8. Social and Institutional Validation</h2>
          <p>
            To strengthen credibility, we will pursue:
          </p>
          <ul>
            <li>Partnerships with trusted financial and security organizations</li>
            <li>Verified user testimonials</li>
            <li>Public success metrics</li>
            <li>Referral-driven growth</li>
          </ul>

          <Section style={{ marginTop: '3rem', backgroundColor: '#f0f7ff' }}>
            <h3>Our Vision</h3>
            <p>
              By combining strong security, complete transparency, privacy-first principles, and measurable financial
              value, we can transform subscription management from a frustrating manual process into a trusted
              automated service.
            </p>
          </Section>
        </SecurityContent>
      </Container>
    </>
  );
}
