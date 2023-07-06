import { NextRequest, NextResponse } from "next/server";
import createTransporter from "../../../lib/mailer";

export async function POST(request: NextRequest) {
  const formData = await request.json();
  const { email, message } = formData;
  const mailOptions = {
    from: email,
    to: "henryoke158@gmail.com",
    subject: "New Contact Form Submission",
    text: `
    Email: ${email}
    Message: ${message}
  `,
  };
  try {
    const data = await createTransporter.sendMail(mailOptions);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
