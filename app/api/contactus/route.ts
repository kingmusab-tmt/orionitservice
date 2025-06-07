import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Validate content type
    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type. Please use application/json" },
        { status: 400 }
      );
    }

    // Parse request body
    const body = await req.json();

    // Input validation
    const validationErrors = validateInput(body);
    if (validationErrors.length > 0) {
      return NextResponse.json({ errors: validationErrors }, { status: 400 });
    }

    // Validate environment variables
    const envErrors = validateEnvironment();
    if (envErrors.length > 0) {
      console.error("Missing environment variables:", envErrors);
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.COMPANY_EMAIL,
      subject: `New Contact Request from ${body.name}`,
      text: generateEmailText(body),
      html: generateEmailHTML(body),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Contact request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Helper function to validate environment variables
function validateEnvironment(): string[] {
  const requiredEnvVars = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_SECURE",
    "SMTP_USER",
    "SMTP_PASSWORD",
    "SMTP_FROM_EMAIL",
    "COMPANY_EMAIL",
  ];

  return requiredEnvVars.filter((envVar) => !process.env[envVar]);
}

// Helper function to validate input
function validateInput(body: any): string[] {
  const errors: string[] = [];

  // Required fields
  if (
    !body.name ||
    typeof body.name !== "string" ||
    body.name.trim().length === 0
  ) {
    errors.push("Name is required and must be a non-empty string");
  }

  if (
    !body.email ||
    typeof body.email !== "string" ||
    !isValidEmail(body.email)
  ) {
    errors.push("Valid email is required");
  }

  if (
    !body.message ||
    typeof body.message !== "string" ||
    body.message.trim().length === 0
  ) {
    errors.push("Message is required and must be a non-empty string");
  }

  // Optional fields validation
  if (body.phone && typeof body.phone !== "string") {
    errors.push("Phone must be a string if provided");
  }

  return errors;
}

// Helper function to validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to generate email text
function generateEmailText(body: any): string {
  return `
    Name: ${body.name}
    Email: ${body.email}
    Phone: ${body.phone || "Not provided"}
    
    Message:
    ${body.message}
  `;
}

// Helper function to generate email HTML
function generateEmailHTML(body: any): string {
  return `
    <h2>New Contact Request</h2>
    <p><strong>From:</strong> ${body.name}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
    
    <h3>Message</h3>
    <p>${body.message}</p>
  `;
}
