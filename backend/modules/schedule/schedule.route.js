const express = require("express");
const router = express.Router();
const {
  getAllSchedule,
  getSingleSchedule,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} = require("./schedule.controller");
const { isAdmin } = require("../../middlewares/auth.middleware");

router.get("/", isAdmin, getAllSchedule);
router.get("/:id", isAdmin, getSingleSchedule);

router.post("/", isAdmin, createSchedule);
router.put("/:id", isAdmin, updateSchedule);
router.delete("/:id", isAdmin, deleteSchedule);

module.exports = router;
