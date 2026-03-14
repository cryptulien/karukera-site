import { NextRequest, NextResponse } from "next/server";

const VALID_OPTIONS = ["content-engine", "code-review", "devops-sre"] as const;
type VoteOption = (typeof VALID_OPTIONS)[number];

// In-memory vote store (will be replaced with DB later)
const votes: Record<VoteOption, number> = {
  "content-engine": 0,
  "code-review": 0,
  "devops-sre": 0,
};

export async function GET() {
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

    votes[option as VoteOption]++;

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
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
