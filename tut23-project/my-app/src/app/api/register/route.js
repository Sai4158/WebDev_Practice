import User from "@/app/Models/User";
import connectToDb from "@/app/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDb();
    const { name, email, password } = await request.json();
    const userExsit = await User.findOne({ email });

    if (userExsit) {
      return NextResponse.json({ error: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({ message: "User created", status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error has oocured", status: 500 });
  }
}
