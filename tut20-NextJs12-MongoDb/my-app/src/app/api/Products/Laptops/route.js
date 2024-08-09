import { DBconnection } from "@/app/utils/config/db";
import LaptopModel from "@/app/utils/Models/Laptop";
import { NextResponse } from "next/server";

// connect to db
// call the function here

const connectDB = async () => {
  // call the connection function
  await DBconnection();
};
connectDB();

// This get will be fecteched and displayed
export async function GET() {
  const display = await LaptopModel.find({});
  return NextResponse.json(display);
}

// post method to update or upload into DB
export async function POST(request) {
  const { name, laptopmodel, laptopprice } = await request.json();

  await LaptopModel.create({
    name,
    laptopmodel,
    laptopprice,
  });

  // it will send this msg once its done
  return NextResponse.json({ msg: "Added successfully" });
}

// this function is to update the data
// PUT - UPDATE

export async function PUT(request) {
  const laptopId = await request.nextUrl.searchParams.get("id");

  const {
    newTitle: name,
    newModel: laptopmodel,
    newPrice: laptopprice,
  } = await request.json();

  await LaptopModel.findByIdAndUpdate(laptopId, {
    name,
    laptopmodel,
    laptopprice,
  });

  return NextResponse.json({ msg: "Laptop product updated" });
}
