import { sendMail } from '../../config/nodemailer'; // adjust path if needed

export async function POST(req) {
  const { message, name, email } = await req.json();

  if (!message || !name || !email) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
  }

  try {
    const emailBody = `
You have received a new message from your portfolio website:

Name: ${name}
Email: ${email}

Message:
${message}
    `;

    await sendMail(process.env.EMAIL_USER, `New Mail From ${name}`, emailBody);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}
