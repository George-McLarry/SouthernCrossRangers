# Southern Cross Rangers Website

Official website for Southern Cross Rangers - Authentic Country Music from Tasmania.

## Features

- 🎵 Music player with global playback across pages
- 🛒 Album purchase with Stripe integration
- 📸 Gallery with photo showcase
- 📅 Events calendar with recurring events
- 📚 Library with lyrics and newsletters
- 📧 Contact form with email delivery
- 🎨 Beautiful parchment-style design

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Stripe** - Payment processing
- **Nodemailer** - Email delivery

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd html
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file with your environment variables (see deployment guide)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

See `FINAL_PUSH_INSTRUCTIONS.md` for deployment steps.

## Environment Variables

**⚠️ Never commit API keys to git!**

Add these to your hosting platform (Vercel, Netlify, etc.):
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_APP_URL`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`
- `CONTACT_EMAIL`

## License

All rights reserved © Southern Cross Rangers

