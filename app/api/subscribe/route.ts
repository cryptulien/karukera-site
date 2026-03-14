import { NextRequest, NextResponse } from "next/server";

// In-memory subscriber list (will be replaced with DB later)
const subscribers: string[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (subscribers.includes(email.toLowerCase())) {
      return NextResponse.json({
        success: true,
        message: "You're already on the list. We see you.",
      });
    }

    subscribers.push(email.toLowerCase());
    console.log(`[SUBSCRIBE] New subscriber: ${email} | Total: ${subscribers.length}`);

    return NextResponse.json({
      success: true,
      message: "Welcome to the experiment.",
      count: subscribers.length,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
