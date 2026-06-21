# TrustVault - Building User Trust in Subscription Management

A modern web application built with Next.js, TypeScript, and Styled Components that demonstrates best practices in security, privacy, and transparency for subscription management.

## Features

- **Secure Architecture**: Zero-knowledge credential encryption with ephemeral execution environments
- **Complete Transparency**: Live audit trails for all user actions
- **Privacy-First Design**: User data is never sold or shared with third parties
- **User Authentication**: Secure account management with encrypted credentials
- **Responsive Design**: Beautiful, accessible interface using Styled Components
- **Type-Safe**: Full TypeScript support throughout the application

## Project Structure

```
src/
├── components/     # Reusable React components (Layout, etc.)
├── lib/           # Utility functions and helpers
├── pages/         # Next.js pages and routes
│   ├── auth/      # Authentication pages (login, register)
│   ├── _app.tsx   # App wrapper
│   ├── _document.tsx # HTML document setup
│   ├── index.tsx  # Home page
│   ├── about.tsx  # About page
│   ├── security.tsx # Security/Trust content page
│   ├── dashboard.tsx # User dashboard
│   ├── privacy.tsx # Privacy policy
│   └── terms.tsx  # Terms of service
├── styles/        # Global and component styles (Styled Components)
└── public/        # Static assets

prisma/
├── schema.prisma  # Database schema

.github/
└── copilot-instructions.md # Project setup checklist
```

## Tech Stack

- **Framework**: Next.js 14+ with React 18
- **Language**: TypeScript
- **Styling**: Styled Components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Security**: bcryptjs for password hashing

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- A modern web browser

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
   - Copy `.env.example` to `.env`
   - Update with your database URL and NextAuth secret

3. **Set up the database**:
```bash
npx prisma migrate dev
npx prisma generate
```

4. **Start the development server**:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations

## Pages

- **Home** (`/`) - Landing page with core principles
- **Security** (`/security`) - Detailed security and trust documentation
- **About** (`/about`) - Company mission and values
- **Dashboard** (`/dashboard`) - User dashboard (requires authentication)
- **Login** (`/auth/login`) - User login
- **Register** (`/auth/register`) - User registration
- **Privacy Policy** (`/privacy`) - Privacy policy
- **Terms of Service** (`/terms`) - Terms of service

## Key Principles

### 1. **No Access to Banking Credentials**
Users authenticate directly with their financial institutions through open-banking APIs. We only receive read-only access tokens.

### 2. **Zero-Knowledge Architecture**
Sensitive credentials are encrypted on the client-side. Our servers cannot decrypt them. Decryption happens only in temporary, isolated environments.

### 3. **Complete Transparency**
Every action is logged and displayed in real-time. Users can review and approve workflows before execution.

### 4. **Security First**
- Industry-standard encryption (TLS for transit, AES-256 for storage)
- Regular security audits and penetration testing
- SOC 2 Type II certification (roadmap)
- GDPR and CCPA compliance

### 5. **Privacy-First Business Model**
- User data is never sold or shared
- No advertising profiles are built
- Transaction data used only for subscription identification

## Database Schema

The application uses Prisma ORM with PostgreSQL:

- **User**: User account information
- **Session**: Active user sessions with expiration
- **AuditLog**: Timestamped record of all user actions

## Security Considerations

- All passwords are hashed with bcryptjs
- Database connections use encrypted channels
- Environment variables protect sensitive configuration
- Encrypted at-rest and in-transit for all data
- CORS headers configured for API security
- Session tokens are cryptographically secure

## Future Enhancements

- Open Banking API integrations (Plaid, Teller, TrueLayer)
- Real subscription detection and management
- Two-factor authentication
- Advanced audit trail visualization
- Subscription analytics and insights
- Merchant account automation
- Mobile app support

## License

This project is proprietary. All rights reserved.

## Support

For questions or issues, please contact support@trustvault.com
