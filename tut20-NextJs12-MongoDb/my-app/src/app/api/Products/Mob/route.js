import { DBconnection } from "@/app/utils/config/db";
import MobileModel from "@/app/utils/Models/Mobile";
import { NextResponse } from "next/server";

// connect to db
// call the function here

const connectDB = async () => {
  // call the connection function
  await DBconnection();
};
connectDB();

export async function GET() {
  const mobileData = await MobileModel.find({});
  return NextResponse.json(mobileData);
}

export async function POST(request) {
  const { title, model, price } = await request.json();
  await MobileModel.create({ title, model, price });
  return NextResponse.json({ success: "Mobile added successfully!" });
}
