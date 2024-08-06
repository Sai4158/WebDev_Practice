import { DBconnection } from "@/app/utils/db";
import { NextResponse } from "next/server";

const connectDB = async () => {
  // call the connection function
  await DBconnection();
};
connectDB();

export async function GET() {
  return NextResponse.json({ Student: "Sai" });
}
