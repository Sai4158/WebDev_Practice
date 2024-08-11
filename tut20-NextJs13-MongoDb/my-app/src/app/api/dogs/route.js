import { DBconnection } from "@/utils/config/DB";
import { NextResponse } from "next/server";

// This function connects to the database
const connectDb = async () => {
  await DBconnection();
};
connectDb();

// Connecting to the database when the API route is hit
export async function GET() {
  return NextResponse.json({ golden: "retriever" });
}
