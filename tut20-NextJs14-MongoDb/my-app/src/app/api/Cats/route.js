import { NextResponse } from "next/server";
import { DbConnection } from "../../../Utils/config/DB";

const connectToDb = async () => {
  await DbConnection();
};

export async function GET() {
  await connectToDb();
  return NextResponse.json({ Cat: "meow" });
}
