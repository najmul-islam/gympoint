const express = require("express");
const router = express.Router();
const {
  getAllTrainer,
  getSingleTrainer,
  createTrainer,
  removeTrainer,
} = require("./trainer.controller");

const { isAdmin } = require("../../middlewares/auth.middleware");

router.get("/", isAdmin, getAllTrainer);
router.get("/:userId", isAdmin, getSingleTrainer);
router.patch("/create/:userId", isAdmin, createTrainer);
router.patch("/remove/:userId", isAdmin, removeTrainer);

module.exports = router;
