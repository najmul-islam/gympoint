const asyncHandler = require("express-async-handler");
const User = require("../user/user.model");

const getAllTrainer = asyncHandler(async (req, res) => {
  const trainers = await User.find({ role: "trainer" }).select("-password");

  res.status(200).json(trainers);
});

const getSingleTrainer = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const trainer = await User.findById(userId).select("-password");

  if (!trainer) {
    res.status(404);
    throw new Error("Trainer not found");
  }

  res.status(200).json(trainer);
});

const createTrainer = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const { specialization } = req.body;

  // Check if all required fields are provided
  if (!specialization) {
    res.status(400);
    throw new Error("Please provide both 'email' and 'specialization' fields.");
  }

  // Check if user exists with the provided email
  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error(`User not found with the email: ${userId}`);
  }

  // Check if the user is already a trainer
  if (user.role === "trainer") {
    res.status(400);
    throw new Error("This user is already assigned the 'trainer' role.");
  }

  // Update user's role and specialization to 'trainer'
  const trainer = await User.findByIdAndUpdate(
    user._id, // Using user._id directly
    {
      role: "trainer",
      specialization: specialization,
    },
    { new: true, runValidators: true } // Ensure new document and validators run
  );

  if (!trainer) {
    res.status(500);
    throw new Error("Failed to update user role to trainer. Please try again.");
  }

  // Respond with the success message and updated user data
  res.status(201).json({
    success: true,
    message: "Trainer created successfully",
    data: trainer,
  });
});

const removeTrainer = asyncHandler(async (req, res) => {
  // Find the trainer by ID
  const userId = req.params.userId;
  const trainer = await User.findById(userId);

  if (!trainer) {
    res.status(404);
    throw new Error("Trainer not found");
  }

  // Ensure that the user is currently a trainer
  if (trainer.role !== "trainer") {
    res.status(400);
    throw new Error("This user is not a trainer, cannot update to trainee.");
  }

  const updatedTrainee = await User.findByIdAndUpdate(
    trainer.id,
    {
      role: "trainee",
      specialization: null,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    success: true,
    message: "Trainer successfully updated to trainee",
    data: updatedTrainee,
  });
});

module.exports = {
  getAllTrainer,
  getSingleTrainer,
  createTrainer,
  removeTrainer,
};
