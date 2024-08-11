import DogModel from "@/app/Model/Dog";
import { DBconnection } from "@/utils/config/DB";
import { NextResponse } from "next/server";

// GET method to retrieve all dogs
export async function GET() {
  await DBconnection();
  const showData = await DogModel.find({});
  return NextResponse.json(showData);
}

// POST method to create a new dog entry
export async function POST(request) {
  await DBconnection();

  const { DogName, DogBreed, DogAge } = await request.json();

  const newDog = await DogModel.create({
    DogName,
    DogBreed,
    DogAge,
  });

  return NextResponse.json({ MSG: "This dog has been added!", data: newDog });
}
