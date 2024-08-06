import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ Student: "Sai", Car: "Range rover" });
}
