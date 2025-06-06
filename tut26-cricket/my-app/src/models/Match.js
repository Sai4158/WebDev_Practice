// /models/Match.js

import mongoose from "mongoose";

// Define a schema for a single ball delivery
const BallSchema = new mongoose.Schema(
  {
    runs: { type: Number, required: true },
    isExtra: { type: Boolean, default: false },
    extraType: {
      type: String,
      enum: ["wide", "noball", "byes", "legbyes", null],
      default: null,
    },
    isOut: { type: Boolean, default: false },
  },
  { _id: false }
); // _id: false prevents Mongoose from creating IDs for sub-documents

// Define a schema for a single over
const OverSchema = new mongoose.Schema(
  {
    overNumber: { type: Number, required: true },
    balls: [BallSchema], // An array of balls bowled in this over
    bowler: { type: String, default: "" }, // Optional: track the bowler
  },
  { _id: false }
);

const MatchSchema = new mongoose.Schema(
  {
    teamA: { type: [String], required: true },
    teamB: { type: [String], required: true },
    overs: { type: Number, required: true },

    // State tracking
    tossWinner: { type: String, default: "" },
    // ADD THIS LINE:
    sessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      required: true,
    },
    score: { type: Number, default: 0 },
    outs: { type: Number, default: 0 },
    isOngoing: { type: Boolean, default: true },
    innings: { type: String, enum: ["first", "second"], default: "first" },
    result: { type: String, default: "" },

    // Inning-specific data
    innings1: {
      team: { type: String },
      score: { type: Number, default: 0 },
      history: [OverSchema], // Use the structured OverSchema
    },
    innings2: {
      team: { type: String },
      score: { type: Number, default: 0 },
      history: [OverSchema], // Use the structured OverSchema
    },
    widesInRow: { type: Number, default: 0 },

    // You can keep a flat list of all balls for easy processing if needed
    balls: [BallSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Match || mongoose.model("Match", MatchSchema);
