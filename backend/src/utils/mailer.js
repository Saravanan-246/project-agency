import nodemailer from "nodemailer";

export const sendContactEmail = async ({ name, email, message }) => {
  try {
    // ------------------------
    // 1️⃣ Basic Validation
    // ------------------------
    if (!name || !email || !message) {
      throw new Error("All fields are required.");
    }

    if (message.length > 150) {
      throw new Error("Message exceeds 150 character limit.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format.");
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      throw new Error("Gmail credentials missing in .env");
    }

    // ------------------------
    // 2️⃣ Transporter
    // ------------------------
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ------------------------
    // 3️⃣ Professional Email Template
    // ------------------------
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; padding:20px;">
        <h2 style="color:#111;">New Project Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>

        <hr style="margin:20px 0;" />

        <p><strong>Project Summary:</strong></p>
        <p style="background:#f5f5f5;padding:15px;border-radius:8px;">
          ${message}
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Project Agency" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: htmlTemplate,
    });

    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Email failed:", error.message);
    throw error; // important so frontend knows it failed
  }
};