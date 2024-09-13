import { NextResponse } from "next/server";

const { DBconnection } = require("@/app/utils/config/db");

const connectDB = async () => {
  await DBconnection();
};

// get function

export async function GET() {
  connectDB();

  return NextResponse.json({ msg: "Succefully done" });
}


