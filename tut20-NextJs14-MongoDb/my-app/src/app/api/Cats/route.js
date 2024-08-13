import { NextResponse } from "next/server";
import { DbConnection } from "../../../Utils/config/DB";
import CatModel from "@/Utils/Models/Cats";

const connectToDb = async () => {
  await DbConnection();
};

export async function GET() {
  await connectToDb();
  return NextResponse.json({ Cat: "meow" });
}

export async function POST(request) {
  await connectToDb();

  const { catName, catModel } = await request.json();

  await CatModel.create({
    catName,
    catModel,
  });

  return NextResponse.json({ MSG: "SENT" });
}
