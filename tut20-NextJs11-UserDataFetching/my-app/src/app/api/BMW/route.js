import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ BMW: "5 series" });
}

export async function GET() {
  return NextResponse.json({ car: "BMW" });
}
