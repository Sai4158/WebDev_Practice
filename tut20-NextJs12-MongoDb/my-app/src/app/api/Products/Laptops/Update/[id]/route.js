import LaptopModel from "@/app/utils/Models/Laptop";
import { NextResponse } from "next/server";

// This will get the record based on the id from the URL
export async function GET(request, context) {
  // Assign the id from the URL parameters to a constant
  const id = context.params.id;

  // Find the product record by id
  const productRecord = await LaptopModel.findById(id);

  // Return the product record as a JSON response
  return NextResponse.json({ productRecord });
}
