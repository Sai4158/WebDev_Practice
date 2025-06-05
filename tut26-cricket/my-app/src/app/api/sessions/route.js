import { connectDB } from "../../lib/db";
import Session from "../../models/Session";

// POST  /api/sessions  – create blank session
export async function POST(req) {
  const { name } = await req.json();
  await connectDB();
  const session = await Session.create({ name });
  return new Response(JSON.stringify(session), { status: 201 });
}

// GET   /api/sessions  – latest first
export async function GET() {
  await connectDB();
  const sessions = await Session.find().sort({ createdAt: -1 }).limit(10);
  return new Response(JSON.stringify(sessions), { status: 200 });
}
