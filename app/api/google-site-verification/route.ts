import { NextResponse } from "next/server";

const VERIFICATION = "google83a0289db7733ec5.html";

export function GET() {
  return new NextResponse(
    `google-site-verification: ${VERIFICATION}\n`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    }
  );
}
