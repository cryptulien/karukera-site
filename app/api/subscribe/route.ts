import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const dynamic = "force-dynamic";

function getSQL() {
  return neon(process.env.DATABASE_URL!);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const sql = getSQL();
    const existing = await sql`SELECT id FROM subscribers WHERE email = ${email.toLowerCase()} LIMIT 1`;

    if (existing.length > 0) {
      return NextResponse.json({
        success: true,
        message: "You're already on the list. We see you.",
      });
    }

    await sql`INSERT INTO subscribers (email) VALUES (${email.toLowerCase()})`;
    const countResult = await sql`SELECT COUNT(*)::int as count FROM subscribers`;

    return NextResponse.json({
      success: true,
      message: "Welcome to the experiment.",
      count: countResult[0].count,
    });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
