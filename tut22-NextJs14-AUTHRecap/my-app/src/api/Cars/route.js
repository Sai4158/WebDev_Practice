// This is for get post methods

import { DBconnection } from "@/utils/config/db";
import { carModel } from "@/utils/Models/Car";
import { NextResponse } from "next/server";

// Db Connection
const DB = async () => {
  await DBconnection();
};

// This is the get method
export async function GET() {
  DB();
  const a = await carModel.find({});
  return NextResponse.json({ a });
}

// This the post method
export async function POST(request) {
  DB();
  const { CarModel, CarColour } = await request.json();

  await carModel.create({ CarModel, CarColour });

  return NextResponse.json({ success: "Updated the DB" });
}
