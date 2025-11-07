import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const { firstName, email, postalAddress, message } = await request.json()

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const smtpHost = process.env.SMTP_HOST || 'mail.privateemail.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '465')
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD
    const contactEmail = process.env.CONTACT_EMAIL || smtpUser

    if (!smtpUser || !smtpPassword) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
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

    const emailBody = `
New contact form submission from ${firstName}

Email: ${email}
${postalAddress ? `Postal Address: ${postalAddress}` : ''}

Message:
${message}

---
This message was sent from the Southern Cross Rangers website contact form.
    `.trim()

    await transporter.sendMail({
      from: `"Southern Cross Rangers Website" <${smtpUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `Contact Form: Message from ${firstName}`,
      text: emailBody,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #5d4037;">New contact form submission</h2>
          <p><strong>From:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${postalAddress ? `<p><strong>Postal Address:</strong> ${postalAddress}</p>` : ''}
          <hr style="border: 1px solid #d4c4a8; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f5f1e8; padding: 15px; border-radius: 5px;">${message}</p>
          <hr style="border: 1px solid #d4c4a8; margin: 20px 0;" />
          <p style="color: #888; font-size: 12px;">This message was sent from the Southern Cross Rangers website contact form.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

