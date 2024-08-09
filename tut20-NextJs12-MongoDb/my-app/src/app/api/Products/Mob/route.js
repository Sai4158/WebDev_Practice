import { DBconnection } from "@/app/utils/config/db";
import MobileModel from "@/app/utils/Models/Mobile";
import { NextResponse } from "next/server";

// connect to db
const connectDB = async () => {
  // call the connection function
  await DBconnection();
};
// call the function here to render
connectDB();

// this is to display data on the screen
export async function GET() {
  const mobileData = await MobileModel.find({});
  return NextResponse.json(mobileData);
}

// this is to send data to DB
export async function POST(request) {
  const { title, model, price } = await request.json();
  await MobileModel.create({ title, model, price });
  return NextResponse.json({ success: "Mobile added successfully!" });
}

// this function is to update the data
// PUT - UPDATE 
export async function PUT(request) {

  const mobileId = await request.nextUrl.searchParams.get("id");

  const {
    newTitle: title,
    newModel: model,
    newPrice: price,
  } = await request.json();

  await MobileModel.findByIdAndUpdate(mobileId, { title, model, price });

  return NextResponse.json({ msg: "Mobile product updated" });
}
