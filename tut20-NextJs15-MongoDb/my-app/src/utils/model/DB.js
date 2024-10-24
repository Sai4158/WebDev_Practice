const { default: mongoose } = require("mongoose");

const bwmSchmean = new mongoose.Schema({
  bmw: { type: String, required: true },
});

const BmwModel = mongoose.models.bmw || mongoose.model("bmw", bwmSchmean);

export default BmwModel;
