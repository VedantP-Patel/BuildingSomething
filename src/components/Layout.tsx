import React from 'react';
import { Header, Nav, Logo, NavLinks, Footer, FooterContent, FooterBottom } from '@/styles/layout';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header>
        <Nav>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Logo>TrustVault</Logo>
          </Link>
          <NavLinks>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/security">Security</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </NavLinks>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Authentication controls */}
            {(() => {
              const { data: session, status } = useSession();
              if (status === 'loading') return <div>Loading...</div>;
              if (!session) {
                return (
                  <>
                    <a onClick={(e) => { e.preventDefault(); signIn(); }} href="#">Sign In</a>
                  </>
                );
              }

              return (
                <>
                  <span style={{ fontSize: '0.95rem' }}>{session.user?.email}</span>
                  <a onClick={(e) => { e.preventDefault(); signOut({ callbackUrl: '/' }); }} href="#">Sign Out</a>
                </>
              );
            })()}
          </div>
        </Nav>
      </Header>

      <main>{children}</main>

      <Footer>
        <FooterContent>
          <div>
            <h4>About</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4>Security</h4>
            <ul>
              <li><Link href="/security">Security Overview</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/feedback">Send Feedback</Link></li>
            </ul>
          </div>
        </FooterContent>
        <FooterBottom>
          <p>&copy; 2024 TrustVault. All rights reserved.</p>
          <div>
            <Link href="/privacy" style={{ marginRight: '2rem' }}>Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </FooterBottom>
      </Footer>
    </>
  );
};
