// app/api/send-consultation/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (
      !formData.name ||
      !formData.company ||
      !formData.email ||
      !formData.service ||
      !formData.employees
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to company
    const companyMailOptions = {
      from: `"Orion IT Consultations" <${process.env.SMTP_CONSULTATION_EMAIL}>`,
      to: process.env.SMTP_SUPPORT_EMAIL,
      subject: `New Consultation Request from ${formData.name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${formData.service}</p>
        <p><strong>Company Size:</strong> ${formData.employees}</p>
        <p><strong>Message:</strong> ${
          formData.message || "No additional message"
        }</p>
        <br/>
        <p>This request was submitted through the Orion IT website consultation form.</p>
      `,
    };

    // Email to client
    const clientMailOptions = {
      from: `"Orion IT Support" <${process.env.SMTP_CONSULTATION_EMAIL}>`,
      to: formData.email,
      subject: "We Received Your Consultation Request",
      html: `
        <h2>Thank you for contacting Orion IT!</h2>
        <p>We've received your consultation request and one of our experts will contact you within 24 hours.</p>
        <p>Here's a summary of your request:</p>
        <ul>
        <li><strong>Name:</strong> ${formData.name}</li>
        <li><strong>Company:</strong> ${formData.company}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone || "Not provided"}</li>
        <li><strong>Service Interest:</strong> ${formData.service}</li>
        <li><strong>Company Size:</strong> ${formData.employees}</li>
        <li><strong>Message:</strong> ${
          formData.message || "No additional message"
        }</li>
        </ul>
        <p>If you have any immediate questions, please reply to this email or call us at +1 702-800-9182.</p>
        <br/>
        <p>Best regards,</p>
        <p>The Orion IT Team</p>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return NextResponse.json(
      { message: "Consultation request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending consultation request:", error);
    return NextResponse.json(
      { message: "Error sending consultation request" },
      { status: 500 }
    );
  }
}
