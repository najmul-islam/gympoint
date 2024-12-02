const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    equipment: {
      type: [String],
    },
    thumbnail: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

ClassSchema.pre("save", function (next) {
  const slug = this.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  this.thumbnail = `/images/class/${slug}.jpg`;

  next();
});

module.exports = mongoose.model("Class", ClassSchema);
