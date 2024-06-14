// app/api/sendMail/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();
    const { SMTP_EMAIL, SMTP_PASSWORD, SMTP_HOST, SMTP_PORT, SMTP_SECURE }: any = process.env;

    // Configurar o Nodemailer
    let transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    // Caminho para o logotipo da empresa
    const logoPath = path.join(process.cwd(), "public/logo.png");
    const logoContent = fs.readFileSync(logoPath).toString("base64");

    // Configurar o email para o destinatário principal
    let mailOptionsMain = {
      from: SMTP_EMAIL,
      to: SMTP_EMAIL, // Endereço principal
      subject: `Nova mensagem do site`,
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
    };

    // Configurar o email de agradecimento para o cliente
    let mailOptionsClient = {
      from: SMTP_EMAIL,
      to: email, // Email do cliente
      subject: `Obrigado por nos contatar, ${name}`,
      html: `
        <p>Olá ${name},</p>
        <p>Obrigado por nos contatar. Nós recebemos sua mensagem e iremos lhe responder o mais breve possível.</p>
        <p>Atenciosamente,<br>PFLEXH Arquitetura</p>
        <img src="cid:logo" alt="Company Logo" />
      `,
      attachments: [
        {
          filename: "logo.png",
          path: logoPath,
          cid: "logo", // CID referenciado no HTML acima
        },
      ],
    };

    // Enviar ambos os e-mails em paralelo
    await Promise.all([
      transporter.sendMail(mailOptionsMain),
      transporter.sendMail(mailOptionsClient),
    ]);

    // Log success and return response
    console.log("Emails sent successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    // Log the error
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
