import connectMongoDB from "@/app/LIBS/DB";
import topic from "@/app/models/Topic";
import Topic from "@/app/models/Topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { title, description } = await request.json();

    await connectMongoDB();

    const updatedTopic = await Topic.findByIdAndUpdate(id, {
      title,
      description,
    });

    if (!updatedTopic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Topic updated successfully",
      updatedTopic,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating topic", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  const { id } = params;

  await connectMongoDB();

  await topic.findById({ _id: id });

  NextResponse.json({ topic });
}
