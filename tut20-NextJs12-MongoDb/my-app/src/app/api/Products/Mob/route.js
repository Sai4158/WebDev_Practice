import MobileModel from "@/app/utils/Models/Mobile";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ Mobiles: "All mobiles" });
}

export async function POST(request) {
  try {
    const { title, model, price } = await request.json();
    await MobileModel.create({
      title,
      model,
      price,
    });
    return NextResponse.json({ success: "Mobile added successfully" });
  } catch (error) {
    console.error("Error creating mobile:", error);
    return NextResponse.json(
      { error: "Error creating mobile" },
      { status: 500 }
    );
  }
}
