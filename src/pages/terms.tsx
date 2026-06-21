import React from 'react';
import Head from 'next/head';
import { Container, Section } from '@/styles/components';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - TrustVault</title>
      </Head>
      <Container>
        <Section style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1>Terms of Service</h1>
          <p><em>Last updated: January 2024</em></p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using TrustVault, you accept and agree to be bound by the terms and provision of this
            agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on
            TrustVault for personal, non-commercial transitory viewing only. This is the grant of a license, not a
            transfer of title.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on TrustVault are provided on an 'as is' basis. We make no warranties, expressed or implied,
            and hereby disclaim and negate all other warranties including, without limitation, implied warranties or
            conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property
            or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall TrustVault or our suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
            use the materials on TrustVault.
          </p>

          <h2>5. Authorization and Account</h2>
          <p>
            By using our service, you authorize us to act on your behalf as your agent to manage your subscriptions. You
            retain the ability to review and revoke this authorization at any time.
          </p>

          <h2>6. Cancellation Guarantee</h2>
          <p>
            If we fail to successfully cancel a subscription that you authorized us to cancel, we will refund the
            associated fees. This guarantee applies to cancellations within our service scope.
          </p>

          <h2>7. Payment Terms</h2>
          <p>
            We charge a service fee for subscription cancellations. Fees are displayed before you authorize any action.
            You agree that we may share a portion of savings with payment processors as permitted by law.
          </p>

          <h2>8. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, TrustVault and/or its licensors own the intellectual property rights for all
            material on the website. All intellectual property rights are reserved.
          </p>

          <h2>9. User Conduct</h2>
          <p>
            You agree not to use TrustVault for any purpose that is illegal or prohibited. You specifically agree not to
            use the service to:
          </p>
          <ul>
            <li>Violate any local, state, national, or international law</li>
            <li>Infringe upon or violate any intellectual property rights</li>
            <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>Transmit any viruses or malicious code</li>
          </ul>

          <h2>10. Termination</h2>
          <p>
            We may terminate your account and access to the service at any time if you breach these terms. You may
            request account deletion at any time.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of California, USA, and
            you irrevocably submit to the exclusive jurisdiction of the courts located in that area.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes are effective when posted. Continued use of
            the service constitutes acceptance of modified terms.
          </p>

          <h2>13. Contact</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at legal@trustvault.com
          </p>
        </Section>
      </Container>
    </>
  );
}
