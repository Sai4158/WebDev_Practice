import CatModel from "@/Utils/Models/Cats";
import { NextResponse } from "next/server";

// this is will find json and show it
export async function GET(request, context) {
  console.log("here is the context", context);

  //   collect url
  const id = context.params.id;

  // get the id in the url and find it
  const catData = await CatModel.findById(id);

  //   show data
  return NextResponse.json({ catData });
}
