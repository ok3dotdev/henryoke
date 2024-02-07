import nodemailer, { Transporter } from 'nodemailer';

const createTransporter = (): Transporter => {
  return nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASS,
    },
  });
};

export default createTransporter();
