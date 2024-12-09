import connectMongoDB from "@/app/LIBS/DB";
import Topic from "../../Topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();

  await Topic.create({ title, description });

  return NextResponse.json({ Message: "Topic Created" }, { status: 201 });
}
