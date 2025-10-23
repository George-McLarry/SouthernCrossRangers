# 🚀 Southern Cross Rangers Website - Deployment Guide

## 📋 Prerequisites

Before deploying, ensure you have:
- [ ] GitHub account
- [ ] Netlify account
- [ ] Supabase account (free tier)
- [ ] Stripe account
- [ ] ConvertKit account

## 🔧 Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Stripe Configuration
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here

# ConvertKit Configuration
CONVERTKIT_API_KEY=your_convertkit_api_key_here
CONVERTKIT_FORM_ID=your_convertkit_form_id_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.netlify.app
NEXT_PUBLIC_SITE_NAME=Southern Cross Rangers
```

## 🗄️ Supabase Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new project
4. Note your project URL and API keys

### 2. Database Tables
Run these SQL commands in your Supabase SQL editor:

```sql
-- Content management table
CREATE TABLE website_content (
  id SERIAL PRIMARY KEY,
  section VARCHAR(50) NOT NULL,
  content JSONB NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Music tracks table
CREATE TABLE music_tracks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL,
  album VARCHAR(255) NOT NULL,
  duration VARCHAR(10) NOT NULL,
  file_path VARCHAR(500),
  status VARCHAR(20) DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Products table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'AUD',
  stripe_price_id VARCHAR(255),
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  stripe_session_id VARCHAR(255) UNIQUE,
  customer_email VARCHAR(255) NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'AUD',
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Newsletter subscribers table
CREATE TABLE newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(255),
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Gallery images table
CREATE TABLE gallery_images (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  file_path VARCHAR(500) NOT NULL,
  alt_text VARCHAR(255),
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Events table
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  event_date TIMESTAMP NOT NULL,
  location VARCHAR(255) NOT NULL,
  ticket_url VARCHAR(500),
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Row Level Security (RLS)
Enable RLS and create policies:

```sql
-- Enable RLS on all tables
ALTER TABLE website_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE music_tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policies (adjust as needed for your security requirements)
CREATE POLICY "Allow public read access" ON website_content FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON music_tracks FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read access" ON products FOR SELECT USING (status = 'active');
CREATE POLICY "Allow public read access" ON gallery_images FOR SELECT USING (status = 'active');
CREATE POLICY "Allow public read access" ON events FOR SELECT USING (status = 'active');
```

## 💳 Stripe Setup

### 1. Create Stripe Account
1. Go to [stripe.com](https://stripe.com)
2. Create an account
3. Get your API keys from the dashboard

### 2. Create Products
1. Go to Products in your Stripe dashboard
2. Create a product for "The One You Need" album
3. Set price to $20 AUD
4. Note the Price ID

### 3. Webhook Setup
1. Go to Webhooks in your Stripe dashboard
2. Add endpoint: `https://your-domain.netlify.app/api/stripe/webhook`
3. Select events: `checkout.session.completed`, `payment_intent.succeeded`
4. Copy the webhook secret

## 📧 ConvertKit Setup

### 1. Create ConvertKit Account
1. Go to [convertkit.com](https://convertkit.com)
2. Create an account
3. Get your API key from Account Settings

### 2. Create Form
1. Go to Forms in your ConvertKit dashboard
2. Create a new form
3. Note the Form ID

## 🚀 Netlify Deployment

### 1. Connect GitHub Repository
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your repository

### 2. Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: `18` (or latest)

### 3. Environment Variables
Add all your environment variables in Netlify:
1. Go to Site settings > Environment variables
2. Add each variable from your `.env.local` file

### 4. Custom Domain (Optional)
1. Go to Domain settings
2. Add your custom domain
3. Configure DNS settings

## 📱 Mobile Optimization

The website is already optimized for mobile with:
- ✅ Responsive design
- ✅ Touch-friendly navigation
- ✅ Mobile-first approach
- ✅ Fast loading times
- ✅ SEO optimization

## 🔍 SEO Optimization

The website includes:
- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt

## 📊 Analytics Setup

### 1. Google Analytics (Optional)
1. Create Google Analytics account
2. Add tracking code to `app/layout.tsx`

### 2. Built-in Analytics
The admin panel includes built-in analytics for:
- Page views
- Visitor tracking
- Popular pages
- Traffic sources
- Device types
- Geographic data

## 🛡️ Security Features

- ✅ HTTPS enabled
- ✅ Environment variables for sensitive data
- ✅ Input sanitization
- ✅ CSRF protection
- ✅ Rate limiting
- ✅ Secure headers

## 📈 Performance Optimization

- ✅ Static site generation
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ CDN delivery
- ✅ Compression

## 🎯 Next Steps After Deployment

1. **Test All Features**:
   - [ ] Homepage loads correctly
   - [ ] Music player works
   - [ ] Mercantile checkout works
   - [ ] Admin panel accessible
   - [ ] Mobile navigation works

2. **Content Management**:
   - [ ] Add your music files to `/public/audio/`
   - [ ] Upload images to `/public/images/`
   - [ ] Customize content via Admin panel
   - [ ] Set up newsletter

3. **Integrations**:
   - [ ] Test Stripe payments
   - [ ] Test ConvertKit signups
   - [ ] Verify Supabase connections
   - [ ] Set up webhooks

4. **Launch Checklist**:
   - [ ] All pages working
   - [ ] Mobile responsive
   - [ ] Fast loading
   - [ ] SEO optimized
   - [ ] Analytics tracking
   - [ ] Backup system working

## 🆘 Troubleshooting

### Common Issues:
1. **Build Errors**: Check environment variables
2. **Database Errors**: Verify Supabase connection
3. **Payment Issues**: Check Stripe configuration
4. **Email Issues**: Verify ConvertKit setup

### Support:
- Check browser console for errors
- Check Netlify build logs
- Verify all environment variables
- Test locally first

## 🎸 Congratulations!

Your Southern Cross Rangers website is now ready to rock! 🎵

The website includes:
- ✅ Professional design
- ✅ Mobile optimization
- ✅ Admin panel
- ✅ E-commerce functionality
- ✅ Music player
- ✅ Newsletter system
- ✅ Analytics
- ✅ Backup system

**Your authentic Tasmanian country music is now ready to reach the world!** 🌏🎸

