import nodemailer from 'nodemailer';

// Create a transporter object with Gmail SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

type EmailData = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

/**
 * Send an email using Nodemailer
 */
export async function sendEmail({ to, subject, text, html }: EmailData): Promise<boolean> {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Use the email from environment variable
      to,
      subject,
      text,
      html: html || text,
    });
    
    console.log('Email sent successfully to:', to);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Send signup notification email
 */
export async function sendSignupNotification(userData: {
  firstName: string;
  lastName: string;
  email: string;
}) {
  const { firstName, lastName, email } = userData;
  
  return sendEmail({
    to: 'jaintradersrahon@gmail.com',
    subject: 'New User Registration on Jain Traders',
    text: `A new user has signed up on Jain Traders!
    
Name: ${firstName} ${lastName}
Email: ${email}
Date: ${new Date().toLocaleString()}`,
    html: `
      <h2>New User Registration on Jain Traders</h2>
      <p>A new user has signed up on Jain Traders!</p>
      <table>
        <tr>
          <td><strong>Name:</strong></td>
          <td>${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${email}</td>
        </tr>
        <tr>
          <td><strong>Date:</strong></td>
          <td>${new Date().toLocaleString()}</td>
        </tr>
      </table>
    `,
  });
}

/**
 * Send login notification email
 */
export async function sendLoginNotification(userData: {
  email: string;
}) {
  const { email } = userData;
  
  return sendEmail({
    to: 'jaintradersrahon@gmail.com',
    subject: 'User  Login on Jain Traders',
    text: `A user has logged in to Jain Traders!
    
Email: ${email}
Date: ${new Date().toLocaleString()}`,
    html: `
      <h2>User Login on Jain Traders</h2>
      <p>A user has logged in to Jain Traders!</p>
      <table>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${email}</td>
        </tr>
        <tr>
          <td><strong>Date:</strong></td>
          <td>${new Date().toLocaleString()}</td>
        </tr>
      </table>
    `,
  });
}
