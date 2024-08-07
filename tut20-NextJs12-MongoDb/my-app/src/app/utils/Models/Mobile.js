const { default: mongoose } = require("mongoose");

const MobileSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    model: {
      type: String,
      require: true,
      unique: true,
    },
    Price: {
      type: String,
      unique: true,
    },
  },

  { timestamps: true }
);

const mobilesModel =
  mongoose.models.mobilesModel || mongoose.model("mobile", MobileSchema);

export default Mobilemodel;
