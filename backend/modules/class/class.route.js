const express = require("express");
const router = express.Router();
const {
  getAllClass,
  getSingleClass,
  createClass,
  updateClass,
  deleteClass,
} = require("./class.controller");
const { isAdmin } = require("../../middlewares/auth.middleware");

router.get("/", getAllClass);
router.get("/:classId", getSingleClass);

router.post("/", isAdmin, createClass);
router.put("/:id", isAdmin, updateClass);
router.delete("/:id", isAdmin, deleteClass);

module.exports = router;
