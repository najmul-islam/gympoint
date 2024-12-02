const asyncHandler = require("express-async-handler");
const User = require("./user.model");

// register user
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // check required fields
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("A user is already associated with this email");
  }

  // create user
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: user.genToken(),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// login user
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error(
      "Error login. Please check your email and password and try again"
    );
  }

  if (user && (await user.isValidPassword(password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: user.genToken(),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// profile
const profile = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
});

// update profile
const updateProfile = asyncHandler(async (req, res) => {
  const { name, password } = req.body;

  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(
    user?.id,
    {
      name: name || user.name,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    _id: updatedUser.id,
    name: updatedUser.name,
    email: updatedUser.email,
    role: updatedUser.role,
    token: updatedUser.genToken(),
  });
});

// update role
const updateRole = asyncHandler(async (req, res) => {
  const { userId, role } = req.body;

  if (!userId || !role) {
    res.status(400);
    throw new Error("User ID and role are required");
  }

  if (req.user.role !== "admin") {
    res.status(403);
    throw new Error("Access denied. Admin privileges required.");
  }

  if (role === "admin") {
    res.status(403);
    throw new Error(
      "An admin already exists. You cannot assign another admin role."
    );
  }

  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(
    user?.id,
    {
      role: role || user.role,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    message: "User role updated successfully",
    user: {
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
    },
  });
});

const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find({ role: "trainee" }).select("-password");

  res.status(200).json(users);
});

module.exports = {
  register,
  login,
  profile,
  updateProfile,
  updateRole,
  getAllUser,
};
