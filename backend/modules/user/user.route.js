const express = require("express");
const router = express.Router();

const {
  register,
  login,
  profile,
  updateProfile,
  updateRole,
  getAllUser,
} = require("./user.controller");
const { isTrainee, isAdmin } = require("../../middlewares/auth.middleware");

router.get("/", isAdmin, getAllUser);
router.post("/register", register);
router.post("/login", login);
router.get("/profile", isTrainee, profile);
router.put("/profile", isTrainee, updateProfile);

router.patch("/role", isAdmin, updateRole);

module.exports = router;
