import { DBconnection } from "@/app/utils/config/db";
import LaptopModel from "@/app/utils/Models/Laptop";
import { model } from "mongoose";
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

// Function to handle DELETE requests
export async function DELETE(request) {
  // Retrieve the laptop ID from the query parameters
  const laptopId = request.nextUrl.searchParams.get("id");

  // Delete the laptop record from the database using the ID
  await LaptopModel.findByIdAndDelete(laptopId);

  // Return a response confirming the deletion
  return NextResponse.json({ msg: "Deleted" });
}

// // delete method practice
// export async function DELETE(request) {
//   const laptopID = request.nextUrl.searchParams.get("id");
//   await LaptopModel.findByIdAndDelete(laptopID);

//   return NextResponse.json({ msg: "delete done" });
// }

// // post method
// export async function PSOT(request) {
//   const { name, laptopmodel, laptopprice } = await request.json();

//   await LaptopModel.create({
//     name,
//     laptopmodel,
//     laptopprice,
// //   });

//   return NextResponse.json({ success: "done" });
// }
