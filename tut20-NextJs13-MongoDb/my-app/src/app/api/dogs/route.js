import { Dbconnection } from "@/app/Model/DB";
import { NextResponse } from "next/server";

// This function connects to the database
const connectDb = async () => {
  await Dbconnection();
};

// Connecting to the database when the API route is hit
export async function GET() {
  await connectDb();
  return NextResponse.json({ golden: "retriever" });
}
