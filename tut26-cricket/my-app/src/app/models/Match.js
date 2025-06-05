import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema(
  {
    teamA: {
      type: [String],
      required: true,
    },
    teamB: {
      type: [String],
      required: true,
    },
    tossWinner: {
      type: String,
      required: true,
    },
    overs: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite upon hot reload in dev
export default mongoose.models.Match || mongoose.model("Match", MatchSchema);
