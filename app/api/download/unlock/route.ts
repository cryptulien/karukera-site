import { NextResponse } from "next/server";

export const runtime = "nodejs";

/** Email unlock was brute-forceable. Removed. */
export async function POST() {
  return NextResponse.json({ error: "gone" }, { status: 410 });
}
