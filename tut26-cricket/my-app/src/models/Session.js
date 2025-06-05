import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
  {
    // human-readable label on the home screen (optional in the UI for now)
    name: { type: String, default: "Untitled session" },

    /* teams & match setup */
    teamA: { type: [String], required: true },
    teamB: { type: [String], required: true },
    overs: { type: Number, required: true },

    /* live-match linkage (filled after /teams page) */
    match: { type: mongoose.Schema.Types.ObjectId, ref: "Match" },

    /* housekeeping */
    isLive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Session ||
  mongoose.model("Session", SessionSchema);
