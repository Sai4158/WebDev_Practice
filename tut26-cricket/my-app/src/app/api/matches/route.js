import { connectDB } from "../../lib/db";
import Match from "../../models/Match";

export async function POST(req) {
  try {
    const data = await req.json();
    await connectDB();

    const match = await Match.create(data);
    return new Response(JSON.stringify(match), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error saving match: " + error.message, {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    await connectDB();
    const matches = await Match.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(matches), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error fetching matches: " + error.message, {
      status: 500,
    });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    await Match.deleteMany({});
    return new Response("All matches deleted", { status: 200 });
  } catch (error) {
    return new Response("Error deleting matches: " + error.message, {
      status: 500,
    });
  }
}
