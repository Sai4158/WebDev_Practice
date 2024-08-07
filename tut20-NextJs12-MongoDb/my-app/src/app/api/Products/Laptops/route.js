import LaptopModel from "@/app/utils/Models/Laptop";
import { NextResponse } from "next/server";

// This get will be fecteched and displayed
export async function GET() {
  const display = await LaptopModel.find({});
  return NextResponse.json(display);
}

// post method to update or upload into DB
export async function POST(request) {
  const { name, laptopmodel, laptopprice } = await request.json();

  await LaptopModel.create({
    name,
    laptopmodel,
    laptopprice,
  });

  // it will send this msg once its done
  return NextResponse.json({ msg: "Added successfully" });
}
