import { Dbconnection } from "@/app/Model/DB";
import { NextResponse } from "next/server";

// call the connection Db
const connectDb = async () => {
  await Dbconnection();
};
connectDb();

export async function GET() {
  return NextResponse.json({ golden: "retriver" });
}
