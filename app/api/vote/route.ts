import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const dynamic = "force-dynamic";

const VALID_OPTIONS = ["content-engine", "code-review", "devops-sre"] as const;

function getSQL() {
  return neon(process.env.DATABASE_URL!);
}

export async function GET() {
  const sql = getSQL();
  const rows = await sql`SELECT option, COUNT(*)::int as count FROM votes GROUP BY option`;

  const votes: Record<string, number> = {
    "content-engine": 0,
    "code-review": 0,
    "devops-sre": 0,
  };
  for (const row of rows) {
    votes[row.option] = row.count;
  }
  const total = Object.values(votes).reduce((a, b) => a + b, 0);

  return NextResponse.json({
    votes,
    total,
    percentages: {
      "content-engine": total > 0 ? Math.round((votes["content-engine"] / total) * 100) : 0,
      "code-review": total > 0 ? Math.round((votes["code-review"] / total) * 100) : 0,
      "devops-sre": total > 0 ? Math.round((votes["devops-sre"] / total) * 100) : 0,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { option } = body;

    if (!option || !VALID_OPTIONS.includes(option)) {
      return NextResponse.json(
        { error: "Invalid option. Must be one of: " + VALID_OPTIONS.join(", ") },
        { status: 400 }
      );
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    const sql = getSQL();

    // One vote per IP
    const existing = await sql`SELECT id FROM votes WHERE voter_ip = ${ip} LIMIT 1`;
    if (existing.length > 0) {
      return NextResponse.json({ error: "You have already voted" }, { status: 409 });
    }

    await sql`INSERT INTO votes (option, voter_ip) VALUES (${option}, ${ip})`;

    const rows = await sql`SELECT option, COUNT(*)::int as count FROM votes GROUP BY option`;
    const votes: Record<string, number> = {
      "content-engine": 0,
      "code-review": 0,
      "devops-sre": 0,
    };
    for (const row of rows) {
      votes[row.option] = row.count;
    }
    const total = Object.values(votes).reduce((a, b) => a + b, 0);

    return NextResponse.json({
      success: true,
      votes,
      total,
      percentages: {
        "content-engine": total > 0 ? Math.round((votes["content-engine"] / total) * 100) : 0,
        "code-review": total > 0 ? Math.round((votes["code-review"] / total) * 100) : 0,
        "devops-sre": total > 0 ? Math.round((votes["devops-sre"] / total) * 100) : 0,
      },
    });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
