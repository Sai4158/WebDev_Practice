import LaptopModel from "@/app/utils/Models/Laptop";
import { NextResponse } from "next/server";

export async function GET() {
  const display = await LaptopModel.find({});
  return NextResponse.json(display);
}

// post method to update scheama

export async function POST(request) {
  const { name, laptopmodel, laptopprice } = await request.json();

  await LaptopModel.create({
    name,
    laptopmodel,
    laptopprice,
  });

  return NextResponse.json({ msg: "Added successfully" });
}
