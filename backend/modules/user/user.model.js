const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "trainer", "trainee"],
      default: "trainee",
    },
    specialization: {
      type: String,
    },
  },
  { timestamps: true }
);

// Hash password
UserSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password") || this.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);

      this.password = hashedPassword;
      if (this.email === process.env.ADMIN_EMAIL.toLowerCase()) {
        this.role = "admin";
      }
      next();
    }
  } catch (error) {
    next(error);
  }
});

// check password
UserSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error.message);
  }
};

// generate jwt token
UserSchema.methods.genToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = mongoose.model("User", UserSchema);
