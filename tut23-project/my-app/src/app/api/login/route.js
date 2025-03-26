import User from "@/app/Models/User";
import connectToDb from "@/app/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDb();
    const { email, password } = await request.json();
    const userExsit = await User.findOne({ email });

    if (!userExsit) {
      return NextResponse.json({ error: "User does not exist" });
    }

    const CheckPassword = await bcrypt.compare(password, userExsit.password);

    if (!CheckPassword) {
      return NextResponse.json({
        error: "Password does not match",
        status: 404,
      });
    }

    return NextResponse.json({ message: "Login is successful", status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error has oocured", status: 500 });
  }
}
