import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_2xxSoqdD_QAdo2DPbZLGYdLv7XeAScAqD");
// const fromEmail = process.env.FROM_EMAIL;
const fromEmail = '<onboarding@resend.dev>';

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react:  <div>
      <h1>{subject}</h1>
            <p>از اینکه با ما تماس گرفتید متشکریم!</p>
   <p>پیام جدید ارسال شد:</p>
            <p>{message}</p>
    </div>,
        
      
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
