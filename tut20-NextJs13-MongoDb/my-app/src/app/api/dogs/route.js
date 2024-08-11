import DogModel from "@/app/Model/Dog";
import { DBconnection } from "@/utils/config/DB";
import { NextResponse } from "next/server";

// This function connects to the database
const connectDb = async () => {
  await DBconnection();
};
connectDb();

// Connecting to the database when the API route is hit
export async function GET() {
  const showData = await DogModel.find({});
  return NextResponse.json(showData);
}

// post method to create data
export async function POST(request) {
  const { DogName, DogBreed, DogAge } = await request.json();

  await DogModel.create({
    DogName,
    DogBreed,
    DogAge,
  });

  return NextResponse.json({ MSG: "This dog have been added!" });
}
