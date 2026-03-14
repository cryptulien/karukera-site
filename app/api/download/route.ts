import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";

export async function GET(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing session_id" },
        { status: 400 }
      );
    }

    // Verify the session is paid with Stripe
    const response = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
      {
        headers: {
          Authorization: "Bearer " + process.env.STRIPE_SECRET_KEY,
          "Stripe-Context": "acct_1TAZQGRkyhhrHnW8",
          "Stripe-Version": "2024-12-18.acacia",
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Invalid session" },
        { status: 400 }
      );
    }

    const session = await response.json();

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 403 }
      );
    }

    // Read and serve the playbook
    const playbookPath = "/data/.openclaw/workspace/playbook/THE-GUSTAVE-PLAYBOOK.md";

    let content: string;
    try {
      content = readFileSync(playbookPath, "utf-8");
    } catch {
      return NextResponse.json(
        { error: "Playbook file not found" },
        { status: 500 }
      );
    }

    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Content-Disposition":
          'attachment; filename="THE-GUSTAVE-PLAYBOOK.md"',
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
