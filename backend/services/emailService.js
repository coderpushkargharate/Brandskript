import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const getConfirmationEmailTemplate = (booking) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(to right, #16a34a, #15803d); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
          .section { margin: 20px 0; }
          .section-title { font-size: 16px; font-weight: bold; color: #16a34a; margin-bottom: 10px; }
          .info-row { display: flex; justify-content: space-between; padding: 10px; background-color: white; margin: 5px 0; border-radius: 4px; }
          .label { font-weight: bold; color: #666; }
          .value { color: #333; }
          .divider { border-top: 2px solid #16a34a; margin: 20px 0; }
          .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
          .button { display: inline-block; padding: 12px 30px; background-color: #16a34a; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0; }
          .success-badge { display: inline-block; background-color: #dcfce7; color: #166534; padding: 8px 16px; border-radius: 4px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Booking Confirmation</h1>
            <p>Your session has been successfully scheduled</p>
          </div>

          <div class="content">
            <p>Hello <strong>${booking.fullName}</strong>,</p>

            <p>Thank you for booking a free 1-on-1 session with us! We're excited to help you achieve your fitness goals.</p>

            <div class="section">
              <div style="text-align: center; margin: 20px 0;">
                <span class="success-badge">✓ Confirmed</span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Session Details</div>
              <div class="info-row">
                <span class="label">Date:</span>
                <span class="value">${booking.selectedDate}</span>
              </div>
              <div class="info-row">
                <span class="label">Time:</span>
                <span class="value">${booking.timeSlot}</span>
              </div>
              <div class="info-row">
                <span class="label">Condition:</span>
                <span class="value">${booking.condition}</span>
              </div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <div class="section-title">Your Information</div>
              <div class="info-row">
                <span class="label">Name:</span>
                <span class="value">${booking.fullName}</span>
              </div>
              <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">${booking.email}</span>
              </div>
              <div class="info-row">
                <span class="label">Phone:</span>
                <span class="value">${booking.phoneNumber}</span>
              </div>
              <div class="info-row">
                <span class="label">Age:</span>
                <span class="value">${booking.age} years</span>
              </div>
              <div class="info-row">
                <span class="label">Weight:</span>
                <span class="value">${booking.weight} kg</span>
              </div>
              <div class="info-row">
                <span class="label">Height:</span>
                <span class="value">${booking.height} cm</span>
              </div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <p><strong>What's Next?</strong></p>
              <p>A confirmation email has been sent to your email address. Our team will review your information and send you further instructions within 24 hours.</p>
              <p>If you have any questions or need to reschedule, please reply to this email or contact us directly.</p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.APP_URL}" class="button">Visit Our Website</a>
            </div>

            <div class="footer">
              <p>© 2025 ${process.env.APP_NAME}. All rights reserved.</p>
              <p>This is an automated email. Please do not reply directly to this message.</p>
              <p><a href="${process.env.APP_URL}/privacy" style="color: #16a34a; text-decoration: none;">Privacy Policy</a> |
                 <a href="${process.env.APP_URL}/terms" style="color: #16a34a; text-decoration: none;">Terms of Service</a></p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};

const sendConfirmationEmail = async (booking) => {
  try {
    const mailOptions = {
      from: `${process.env.APP_NAME} <${process.env.FROM_EMAIL}>`,
      to: booking.email,
      subject: `Session Booking Confirmation - ${process.env.APP_NAME}`,
      html: getConfirmationEmailTemplate(booking),
      replyTo: process.env.FROM_EMAIL
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
};

const sendAdminNotificationEmail = async (booking) => {
  try {
    const mailOptions = {
      from: `${process.env.APP_NAME} <${process.env.FROM_EMAIL}>`,
      to: process.env.FROM_EMAIL,
      subject: `New Session Booking - ${booking.fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1f2937; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
              .info-row { padding: 8px; background-color: white; margin: 3px 0; border-radius: 4px; }
              .label { font-weight: bold; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Session Booking</h2>
              </div>
              <div class="content">
                <div class="info-row"><span class="label">Name:</span> ${booking.fullName}</div>
                <div class="info-row"><span class="label">Email:</span> ${booking.email}</div>
                <div class="info-row"><span class="label">Phone:</span> ${booking.phoneNumber}</div>
                <div class="info-row"><span class="label">Occupation:</span> ${booking.occupation}</div>
                <div class="info-row"><span class="label">Date:</span> ${booking.selectedDate}</div>
                <div class="info-row"><span class="label">Time:</span> ${booking.timeSlot}</div>
                <div class="info-row"><span class="label">Condition:</span> ${booking.condition}</div>
                <div class="info-row"><span class="label">Age:</span> ${booking.age}</div>
                <div class="info-row"><span class="label">Weight:</span> ${booking.weight} kg</div>
                <div class="info-row"><span class="label">Height:</span> ${booking.height} cm</div>
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: booking.email
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Admin notification email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return false;
  }
};

const verifyConnection = async () => {
  try {
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    return true;
  } catch (error) {
    console.error('SMTP connection error:', error.message);
    return false;
  }
};

export { sendConfirmationEmail, sendAdminNotificationEmail, verifyConnection };
