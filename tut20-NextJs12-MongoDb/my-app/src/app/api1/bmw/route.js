import { DbCONNECT } from "@/app/utils/config/DB1";
import { NextResponse } from "next/server";

const connectDB1 = async () => {
  await DbCONNECT();
};
connectDB1();

export async function GET() {
  return NextResponse.json({ Student: "Sai", Car: "Range rover" });
}
