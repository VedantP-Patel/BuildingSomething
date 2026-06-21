import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, Section, Form, FormGroup, Button } from '@/styles/components';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

const TermsCheckbox = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  input {
    margin-top: 0.25rem;
  }

  label {
    font-size: 0.9rem;
    color: #666;

    a {
      color: #0066cc;
    }
  }
`;

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!agreed) {
      setError('You must agree to the terms and privacy policy');
      return;
    }

    setLoading(true);

    // In production, make API call to register
    console.log('Registration attempt:', { email, password });

    try {
      const resp = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name: '' }),
      });

      if (!resp.ok) {
        const j = await resp.json();
        setError(j.error || 'Registration failed');
        setLoading(false);
        return;
      }

      setLoading(false);
      // Auto sign in after register
      router.push('/auth/login');
    } catch (err) {
      setError('Registration failed');
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up - TrustVault</title>
      </Head>
      <Container>
        <AuthContainer>
          <AuthCard>
            <h1>Create Account</h1>
            <p>Join TrustVault and take control of your subscriptions.</p>

            {error && (
              <div style={{ color: '#dc3545', marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#f8d7da', borderRadius: '4px' }}>
                {error}
              </div>
            )}

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

              <FormGroup>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                />
              </FormGroup>

              <TermsCheckbox>
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                />
                <label htmlFor="terms">
                  I agree to the <Link href="/terms">Terms of Service</Link> and{' '}
                  <Link href="/privacy">Privacy Policy</Link>
                </label>
              </TermsCheckbox>

              <Button type="submit" disabled={loading} style={{ width: '100%' }}>
                {loading ? 'Creating account...' : 'Create Account'}
              </Button>
            </Form>

            <AuthLink>
              Already have an account? <Link href="/auth/login">Log in here</Link>
            </AuthLink>
          </AuthCard>
        </AuthContainer>
      </Container>
    </>
  );
}
