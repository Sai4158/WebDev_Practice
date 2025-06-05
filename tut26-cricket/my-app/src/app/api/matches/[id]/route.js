import { connectDB } from "../../../lib/db";
import Match from "../../../models/Match";

export async function GET(req, { params }) {
  await connectDB();
  const match = await Match.findById(params.id);
  return new Response(JSON.stringify(match), { status: 200 });
}

export async function PATCH(req, { params }) {
  const data = await req.json();
  await connectDB();
  const updated = await Match.findByIdAndUpdate(params.id, data, { new: true });
  return new Response(JSON.stringify(updated), { status: 200 });
}
