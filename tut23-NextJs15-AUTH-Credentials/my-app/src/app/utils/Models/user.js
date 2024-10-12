import mongoose from "mongoose";

const usernameSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], required: true },
});

export const usermodel =
  mongoose.models.user || mongoose.model("user", usernameSchema);
