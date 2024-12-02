const express = require("express");
const router = express.Router();
const {
  createBooking,
  getBookings,
  getBookingById,
  deleteBooking,
} = require("./booking.controller");
const { isTrainee } = require("../../middlewares/auth.middleware");

router.get("/", isTrainee, getBookings);
router.post("/", isTrainee, createBooking);
router.get("/:bookingId", isTrainee, getBookingById);
router.delete("/:bookingId", isTrainee, deleteBooking);

module.exports = router;
