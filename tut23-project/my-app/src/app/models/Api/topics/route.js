import connectMongoDB from "@/app/LIBS/DB";
import Topic from "../../Topic";
import { NextResponse } from "next/server";

// Post method
export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();

  await Topic.create({ title, description });

  return NextResponse.json({ Message: "Topic Created" }, { status: 201 });
}

// Get method
export async function GET() {
  await connectMongoDB();

  const topics = await Topic.find();

  return NextResponse.json(topics);
}

// Delete method
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ MSG: "Done" });
}
