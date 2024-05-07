// SENDER WITH NODEMAILER
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL!,
    pass: process.env.SMTP_PASSWORD!,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL!,
      to: email,
      subject: "Confirm your email",
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email.</p>`,
    });
  } catch (error) {
    console.log("MAIL ERROR", error);
  }
};
