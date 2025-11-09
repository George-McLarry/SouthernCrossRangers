# Southern Cross Rangers Website

Official Next.js website for Southern Cross Rangers – Authentic Country Music from Tasmania.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Stripe (Checkout + Webhooks)
- Nodemailer (SMTP email)

## Local Development
```bash
npm install
npm run dev
```

## Required Environment Variables
Create `.env.local` and add:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `CONTACT_EMAIL`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_APP_URL`

## Production Notes
- Audio files belong in `public/audio/`
- Images belong in `public/images/`
- Lyric PDFs belong in `public/lyrics/`
- Remember to configure Stripe webhooks and SMTP credentials before deploying.

