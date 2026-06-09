import { submitToIndexNow } from "@/lib/indexnow";
import { NextRequest, NextResponse } from "next/server";

/**
 * API route for submitting URLs to IndexNow
 * POST /api/indexnow
 *
 * Body: {
 *   urls: string[],
 *   keyLocation?: string
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { urls, keyLocation } = body;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "Invalid or empty urls array" },
        { status: 400 },
      );
    }

    // Determine host from request
    const host = request.headers.get("host") || "example.com";
    const protocol = request.headers.get("x-forwarded-proto") || "https";
    const fullKeyLocation =
      keyLocation ||
      `${protocol}://${host}/a7ea15a328334de0bcd5588ccc19fa69.txt`;

    const result = await submitToIndexNow(
      urls,
      host.replace("www.", ""), // Remove www for consistency
      fullKeyLocation,
    );

    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: result.status || 500 });
    }
  } catch (error) {
    console.error("IndexNow API route error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 },
    );
  }
}
