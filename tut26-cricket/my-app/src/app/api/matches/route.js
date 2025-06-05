import { connectDB } from "@/lib/db";
import Match from "@/models/Match";

// POST: Save a new match
export async function POST(req) {
  try {
    const data = await req.json();

    await connectDB();

    const match = await Match.create({
      teamA: data.teamA,
      teamB: data.teamB,
      overs: data.overs,
    });

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

// GET: Fetch all matches
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
