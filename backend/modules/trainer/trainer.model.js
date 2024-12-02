const mongoose = require("mongoose");

const TrainerSchema = new mongoose.Schema(
  {
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    specialization: {
      type: String,
      required: true,
      trim: true,
    },
    schedule: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Schedule",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trainer", TrainerSchema);
