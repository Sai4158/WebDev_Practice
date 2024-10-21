const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  CarModel: { type: String, required: true },
  CarColour: { type: String, required: true },
});

export const carModel = mongoose.models.car || mongoose.model("car", CarSchema);
