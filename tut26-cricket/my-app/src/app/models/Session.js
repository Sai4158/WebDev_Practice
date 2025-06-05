import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    match: { type: mongoose.Schema.Types.ObjectId, ref: "Match" }, // linked after teams page
    isLive: { type: Boolean, default: true }, // mark false when finished
  },
  { timestamps: true }
);

export default mongoose.models.Session ||
  mongoose.model("Session", SessionSchema);
