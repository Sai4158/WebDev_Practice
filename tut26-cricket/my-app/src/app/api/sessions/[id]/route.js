import { connectDB } from "../../lib/db";
import Session from "../../models/Session";

export async function GET(_req, { params }) {
  await connectDB();
  const session = await Session.findById(params.id).populate("match");
  return new Response(JSON.stringify(session), { status: 200 });
}

export async function PATCH(req, { params }) {
  const data = await req.json();
  await connectDB();
  const updated = await Session.findByIdAndUpdate(params.id, data, {
    new: true,
  });
  return new Response(JSON.stringify(updated), { status: 200 });
}

export async function DELETE(_req, { params }) {
  await connectDB();
  await Session.findByIdAndDelete(params.id);
  return new Response(null, { status: 204 });
}
