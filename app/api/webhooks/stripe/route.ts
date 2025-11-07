import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import nodemailer from 'nodemailer'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      if (session.payment_status === 'paid') {
        const customerEmail = session.customer_email || session.customer_details?.email

        if (customerEmail) {
          const downloadUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/purchase-success?session_id=${session.id}`
          
          await sendDownloadEmail(customerEmail, session.id, downloadUrl)
        }
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}

async function sendDownloadEmail(
  customerEmail: string,
  sessionId: string,
  downloadUrl: string
): Promise<void> {
  try {
    const smtpHost = process.env.SMTP_HOST || 'mail.privateemail.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '465')
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD

    if (!smtpUser || !smtpPassword) {
      console.error('SMTP credentials not configured')
      return
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    const emailSubject = 'Your Album Download - The One You Need'
    const emailBody = `
Thank you for purchasing "The One You Need" album!

Your download link: ${downloadUrl}

You can download all 10 tracks from this link. The link is permanent and you can access it anytime.

Track List:
1. The One You Need
2. Being Near Is Better
3. We Will Meet Again
4. Don't Eat The Cheese!
5. Give Me Back The Good Old Days
6. It Can't Buy You Love
7. I Wouldn't Be Here Now
8. The Junk Food Song
9. You Love Me More
10. I Don't Belong Here

Thank you for your support!

- Southern Cross Rangers
    `.trim()

    await transporter.sendMail({
      from: `"Southern Cross Rangers" <${smtpUser}>`,
      to: customerEmail,
      subject: emailSubject,
      text: emailBody,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #5d4037; text-align: center;">Thank you for your purchase!</h2>
          <p>Thank you for purchasing "The One You Need" album!</p>
          <p><a href="${downloadUrl}" style="display: inline-block; padding: 10px 20px; background: #d4af37; color: #5d4037; text-decoration: none; border-radius: 5px; margin: 20px 0;">Download Your Album</a></p>
          <p>You can download all 10 tracks from this link. The link is permanent and you can access it anytime.</p>
          <hr style="border: 1px solid #d4c4a8; margin: 20px 0;" />
          <h3 style="color: #5d4037;">Track List:</h3>
          <ol>
            <li>The One You Need</li>
            <li>Being Near Is Better</li>
            <li>We Will Meet Again</li>
            <li>Don't Eat The Cheese!</li>
            <li>Give Me Back The Good Old Days</li>
            <li>It Can't Buy You Love</li>
            <li>I Wouldn't Be Here Now</li>
            <li>The Junk Food Song</li>
            <li>You Love Me More</li>
            <li>I Don't Belong Here</li>
          </ol>
          <p>Thank you for your support!</p>
          <p>- Southern Cross Rangers</p>
        </div>
      `,
    })

    console.log('Download email sent successfully')
  } catch (error) {
    console.error('Error sending download email:', error)
  }
}

