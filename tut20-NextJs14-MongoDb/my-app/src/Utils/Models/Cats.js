import mongoose from "mongoose";

const CatsSchema = new mongoose.Schema({
  catName: { type: String },
  catColor: { type: String },
});

const CatModel = mongoose.models.cat || mongoose.model("cat", CatsSchema);

export default CatModel;
