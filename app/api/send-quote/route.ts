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

    // Format services
    const servicesList = formatServices(body.services, body.otherService);

    // Email content
    const mailOptions = {
      from: `"Quote Form" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.COMPANY_EMAIL,
      subject: `New Quote Request from ${body.company}`,
      text: generateEmailText(body, servicesList),
      html: generateEmailHTML(body, servicesList),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Quote request submitted successfully" },
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
    !body.company ||
    typeof body.company !== "string" ||
    body.company.trim().length === 0
  ) {
    errors.push("Company name is required and must be a non-empty string");
  }

  // Validate services object
  if (!body.services || typeof body.services !== "object") {
    errors.push("Services selection is required");
  } else {
    const validServiceKeys = [
      "cybersecurity",
      "networking",
      "cloud",
      "backup",
      "other",
    ];
    const serviceKeys = Object.keys(body.services);

    if (serviceKeys.length === 0) {
      errors.push("At least one service must be selected");
    }

    for (const key of serviceKeys) {
      if (!validServiceKeys.includes(key)) {
        errors.push(`Invalid service key: ${key}`);
      } else if (typeof body.services[key] !== "boolean") {
        errors.push(`Service value for ${key} must be boolean`);
      }
    }

    if (
      body.services.other &&
      (!body.otherService ||
        typeof body.otherService !== "string" ||
        body.otherService.trim().length === 0)
    ) {
      errors.push(
        'Other service description is required when "other" is selected'
      );
    }
  }

  // Optional fields validation
  if (body.phone && typeof body.phone !== "string") {
    errors.push("Phone must be a string if provided");
  }

  if (body.employees && typeof body.employees !== "string") {
    errors.push("Employees must be a string if provided");
  }

  if (body.timeline && typeof body.timeline !== "string") {
    errors.push("Timeline must be a string if provided");
  }

  if (body.budget && typeof body.budget !== "string") {
    errors.push("Budget must be a string if provided");
  }

  if (body.message && typeof body.message !== "string") {
    errors.push("Message must be a string if provided");
  }

  return errors;
}

// Helper function to validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to format services
function formatServices(services: any, otherService: string): string {
  return Object.entries(services)
    .filter(([_, value]) => value)
    .map(([key]) => {
      switch (key) {
        case "cybersecurity":
          return "Cybersecurity Training";
        case "networking":
          return "Network Solutions";
        case "cloud":
          return "Cloud Services";
        case "backup":
          return "Data Backup & Recovery";
        case "other":
          return `Other: ${otherService || "Not specified"}`;
        default:
          return key;
      }
    })
    .join(", ");
}

// Helper function to generate email text
function generateEmailText(body: any, servicesList: string): string {
  return `
    Name: ${body.name}
    Company: ${body.company}
    Email: ${body.email}
    Phone: ${body.phone || "Not provided"}
    Employees: ${body.employees || "Not specified"}
    
    Services Needed: ${servicesList}
    Timeline: ${body.timeline || "Not specified"}
    Budget: ${body.budget || "Not specified"}
    
    Additional Information:
    ${body.message || "None"}
  `;
}

// Helper function to generate email HTML
function generateEmailHTML(body: any, servicesList: string): string {
  return `
    <h2>New Quote Request</h2>
    <p><strong>From:</strong> ${body.name} (${body.company})</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
    <p><strong>Company Size:</strong> ${body.employees || "Not specified"}</p>
    
    <h3>Services Requested</h3>
    <p>${servicesList.replace(/, /g, "<br>")}</p>
    
    <p><strong>Timeline:</strong> ${body.timeline || "Not specified"}</p>
    <p><strong>Budget:</strong> ${body.budget || "Not specified"}</p>
    
    <h3>Additional Information</h3>
    <p>${body.message || "None"}</p>
  `;
}
