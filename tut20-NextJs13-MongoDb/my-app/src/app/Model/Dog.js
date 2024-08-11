import mongoose from "mongoose";

const dogSchema = new mongoose.Schema({
  DogName: { type: String, required: true },
  DogBreed: { type: String, required: true },
  DogAge: { type: String, required: true },
});

const DogModel = mongoose.models.Dog || mongoose.model("Dog", dogSchema);

export default DogModel;
