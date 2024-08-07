import Mobilemodel from "@/app/utils/Models/Mobile";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ Mobiles: "All mobiles" });
}

export async function POST(request) {
  const { title, model, price } = await request.json();
  await Mobilemodel.create({
    title,
    model,
    price,
  });

  return NextResponse.json({ success: "Mobiles added Succefully" });
}
