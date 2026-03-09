import nodemailer from "nodemailer";

export const sendMail = async (to, subject, text) => {
  try {
    // Create a transporter using Ethereal test credentials.
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_SMTP_HOST,
      port: process.env.MAILTRAP_SMTP_PORT,
      secure: false, // Use true for port 465, false for port 587
      auth: {
        user: process.env.MAILTRAP_SMTP_USER,
        pass: process.env.MAILTRAP_SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
    from: "no-reply-from-amarnath",
    to,
    subject,
    text, // Plain-text version of the message
    // html: "<b>Hello world?</b>", // HTML version of the message
  });

  console.log("Message sent:", info.messageId);
  return info
  } catch (error) {
    console.log("❌ Mail error", error.message)
    throw error
  }
};
