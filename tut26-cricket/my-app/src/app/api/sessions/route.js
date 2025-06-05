import Session from "../../../models/Session.js";
import { connectDB } from "../../lib/db";

/* POST /api/sessions – create session */
export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();
    const doc = await Session.create(body);
    return Response.json(doc, { status: 201 });
  } catch (e) {
    return new Response("Could not create session – " + e.message, {
      status: 500,
    });
  }
}

/* GET /api/sessions – all sessions (latest first) */
export async function GET() {
  await connectDB();
  const sessions = await Session.find().sort({ createdAt: -1 });
  return Response.json(sessions);
}
