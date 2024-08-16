import { NextResponse } from "next/server";
import { DbConnection } from "../../../Utils/config/DB";
import CatModel from "@/Utils/Models/Cats";

const connectToDb = async () => {
  await DbConnection();
};

export async function GET() {
  await connectToDb();
  const diplay = await CatModel.find({});
  return NextResponse.json(diplay);
}

export async function POST(request) {
  await connectToDb();

  const { catName, catColor } = await request.json();

  await CatModel.create({
    catName,
    catColor,
  });

  return NextResponse.json({ MSG: "SENT" });
}

export async function DELETE(request) {
  const catId = request.nextUrl.searchParams.get("id");

  await CatModel.findByIdAndDelete(catId);

  try {
    return NextResponse.json({ msg: "DELETED" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
