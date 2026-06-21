import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, Section, Form, FormGroup, Button } from '@/styles/components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

const AuthContainer = styled.div`
  max-width: 400px;
  margin: 4rem auto;
`;

const AuthCard = styled(Section)`
  background: white;
  border: 1px solid #e0e0e0;
`;

const AuthLink = styled.p`
  text-align: center;
  margin-top: 1.5rem;

  a {
    color: #0066cc;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Use NextAuth signIn
    const res = await signIn('credentials', { redirect: false, email, password });
    setLoading(false);
    if (res && (res as any).error) {
      alert((res as any).error || 'Login failed');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <>
      <Head>
        <title>Log In - TrustVault</title>
      </Head>
      <Container>
        <AuthContainer>
          <AuthCard>
            <h1>Log In</h1>
            <p>Welcome back! Log in to your TrustVault account.</p>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                />
              </FormGroup>

              <Button type="submit" disabled={loading} style={{ width: '100%' }}>
                {loading ? 'Logging in...' : 'Log In'}
              </Button>
            </Form>

            <AuthLink>
              Don't have an account? <Link href="/auth/register">Sign up here</Link>
            </AuthLink>
          </AuthCard>
        </AuthContainer>
      </Container>
    </>
  );
}
