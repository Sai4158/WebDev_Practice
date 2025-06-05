import { connectDB } from "../../../lib/db";
import Match from "../../../../models/Match";

// GET /api/matches/:id  → fetch full match state
export async function GET(_req, { params }) {
  await connectDB();
  const match = await Match.findById(params.id);
  return new Response(JSON.stringify(match), { status: 200 });
}

// PATCH /api/matches/:id  → update any fields of the match
export async function PATCH(req, { params }) {
  try {
    const data = await req.json();
    await connectDB();

    const updated = await Match.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    return new Response(JSON.stringify(updated), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response("Error updating match: " + err.message, {
      status: 500,
    });
  }
}

// DELETE /api/matches/:id  → hard-reset one match
export async function DELETE(_req, { params }) {
  try {
    await connectDB();
    await Match.findByIdAndDelete(params.id);
    return new Response(null, { status: 204 }); // 204 No Content
  } catch (err) {
    return new Response("Error deleting match: " + err.message, {
      status: 500,
    });
  }
}
