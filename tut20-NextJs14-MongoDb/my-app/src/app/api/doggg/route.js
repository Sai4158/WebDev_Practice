import { DbConnection } from "@/Utils/config/DB";
import CatModel from "@/Utils/Models/Cats";
import { NextResponse } from "next/server";

const connectToDb = async () => {
  await DbConnection();
};

export async function GET() {
  await connectToDb();
  const display = await CatModel.find({});
  return NextResponse.json(display);
}
