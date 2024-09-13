import monitorModel from "@/app/utils/models/monitor";
import { NextResponse } from "next/server";

const { DBconnection } = require("@/app/utils/config/db");

const connectDB = async () => {
  await DBconnection();
};

// GET function
export async function GET() {
  await connectDB();

  // Await the result of find()
  const mobileData = await monitorModel.find({});
  return NextResponse.json(mobileData);
}

// post method

export async function POST(request) {
  await connectDB();

  const { monitor } = await request.json();
  await monitorModel.create({ monitor });

  return NextResponse.json({ msg: "Sent" });
}
