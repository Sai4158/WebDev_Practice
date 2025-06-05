import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema(
  {
    teamA: { type: [String], required: true },
    teamB: { type: [String], required: true },
    tossWinner: { type: String, default: "" },
    overs: { type: Number, required: true },

    score: { type: Number, default: 0 },
    result: { type: String, default: "" },
    isOngoing: { type: Boolean, default: true },

    balls: { type: [Object], default: [] },
    history: { type: [Object], default: [] },
    innings: { type: String, enum: ["first", "second"], default: "first" },
    outs: { type: Number, default: 0 },
    teamAScore: { type: Number, default: 0 },
    teamBScore: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Match || mongoose.model("Match", MatchSchema);
