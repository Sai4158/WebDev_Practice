import { DbConnection } from "@/utils/config/bmw";
import BmwModel from "@/utils/model/DB";
import { request } from "express";
import { NextResponse } from "next/server";

const connectToDb = async () => {
  await DbConnection();
};

export async function GET() {
  await connectToDb();
  const diplay = await BmwModel.find({});
  return NextResponse.json(diplay);
}

export async function POST() {
  await connectToDb();

  const { bmw } = await request.json();

  await BmwModel.create({
    bmw,
  });

  return NextResponse.json({ msg: "Updated" });
}
