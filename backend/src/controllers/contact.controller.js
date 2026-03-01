import Contact from "../models/Contact.js";
import { sendContactEmail } from "../utils/mailer.js";

export const submitContact = async (req, res) => {
  try {
    let { name, email, message } = req.body;

    // Basic sanitization
    name = name?.trim();
    email = email?.trim();
    message = message?.trim();

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    // Save to database
    const savedContact = await Contact.create({
      name,
      email,
      message,
      ip: req.ip,
    });

    // Send email (non-blocking safety)
    try {
      await sendContactEmail({ name, email, message });
    } catch (mailError) {
      console.error("Email sending failed:", mailError.message);
    }

    return res.status(201).json({
      success: true,
      message: "Message submitted successfully.",
      data: {
        id: savedContact._id,
      },
    });
  } catch (error) {
    console.error("Contact Submission Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};