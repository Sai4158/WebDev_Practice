import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema(
  {
    teamA: [String],
    teamB: [String],
    tossWinner: String,
    overs: Number,
    teamAScore: Number,
    teamBScore: Number,
    result: String,
    history: [Object],
  },
  { timestamps: true }
);

export default mongoose.models.Match || mongoose.model("Match", MatchSchema);
