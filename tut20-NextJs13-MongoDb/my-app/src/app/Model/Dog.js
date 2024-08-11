import mongoose from "mongoose";

const dogSchema = new mongoose.Schema({
  DogName: { type: String, require: true },
  DogBreed: { type: String, require: true },
  DogAge: { type: String, require: true },
});

// this is models
const DogModel = mongoose.models.Dog || mongoose.model("Dog", dogSchema);

export default DogModel;
