import Match from "../../../models/Match";
import { connectDB } from "../../lib/db";

// POST /api/matches  → create a new match (before the toss)
export async function POST(req) {
  try {
    const data = await req.json();
    await connectDB();

    // tossWinner will be added later, so we don't require it here
    const newMatch = new Match({
      ...data,
      isOngoing: true, // start live
    });

    await newMatch.save();

    return new Response(JSON.stringify(newMatch), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response("Error saving match: " + err.message, { status: 500 });
  }
}

// GET /api/matches  → list recent matches (optional helper)
export async function GET() {
  try {
    await connectDB();
    const matches = await Match.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(matches), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response("Error fetching matches: " + err.message, {
      status: 500,
    });
  }
}
