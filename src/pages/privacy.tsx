import React from 'react';
import Head from 'next/head';
import { Container, Section } from '@/styles/components';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - TrustVault</title>
      </Head>
      <Container>
        <Section style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1>Privacy Policy</h1>
          <p><em>Last updated: January 2024</em></p>

          <h2>1. Introduction</h2>
          <p>
            TrustVault ("we", "us", "our") operates the TrustVault service. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website and use our service.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Account Information</h3>
          <p>
            When you create an account, we collect your email address and encrypted password. We never store plaintext
            passwords.
          </p>

          <h3>Transaction Data</h3>
          <p>
            With your explicit authorization, we collect anonymized transaction data from your bank account to identify
            subscriptions. We do not retain raw transaction details.
          </p>

          <h3>Device Information</h3>
          <p>
            We may collect information about your device, browser, and how you interact with our service for security
            and improvement purposes.
          </p>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To identify active subscriptions</li>
            <li>To facilitate cancellations on your behalf</li>
            <li>To prevent fraud and enhance security</li>
            <li>To improve our service based on your feedback</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We only share data as necessary
            to provide our service or as required by law.
          </p>

          <h2>5. Data Security</h2>
          <p>
            Your data is protected using industry-standard encryption (TLS for transit, AES-256 for storage). We
            implement regular security audits and penetration testing.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may request data portability
            at any time. Contact us at privacy@trustvault.com to exercise these rights.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of material changes via email or
            prominent notice on our service.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@trustvault.com<br />
            <strong>Address:</strong> TrustVault, Inc.<br />
            San Francisco, CA
          </p>
        </Section>
      </Container>
    </>
  );
}
