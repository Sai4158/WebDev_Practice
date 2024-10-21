import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ student: "Hello World", teacher: "dwqs" });
}
