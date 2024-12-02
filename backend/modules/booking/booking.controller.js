const asyncHandler = require("express-async-handler");
const Booking = require("./booking.model");
const Schedule = require("../schedule/schedule.model");
const User = require("../user/user.model");

const getBookings = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const bookings = await Booking.find({ trainee: userId })
    .populate("schedule", "-trainees")
    .populate("trainee", "-password");

  res.status(200).json(bookings);
});

const getBookingById = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id)
    .populate("schedule")
    .populate("trainee")
    .select("-password");

  if (!booking) {
    res.status(404);
    throw new Error("Booking not found.");
  }

  res.status(200).json(booking);
});

const createBooking = asyncHandler(async (req, res) => {
  const { scheduleId } = req.body;
  const traineeId = req.user.id;

  // Validate input
  if (!scheduleId) {
    res.status(400);
    throw new Error("Please provide scheduleId.");
  }

  // Check if the schedule exists
  const schedule = await Schedule.findById(scheduleId)
    .populate("trainer")
    .populate("class");
  if (!schedule) {
    res.status(404);
    throw new Error("Schedule not found.");
  }

  // Check if the class is already fully booked (limit 10 trainees)
  if (schedule.trainees.length >= 10) {
    res.status(400);
    throw new Error("This class is already fully booked.");
  }

  // Check if the trainee already has a booking for this schedule
  const existingBooking = await Booking.findOne({
    schedule: scheduleId,
    trainee: traineeId,
  });
  if (existingBooking) {
    res.status(400);
    throw new Error("You have already booked this class.");
  }

  // Check if the user exists and is a valid trainee
  const trainee = await User.findById(traineeId);
  if (!trainee || trainee.role !== "trainee") {
    res.status(404);
    throw new Error("Trainee not found or invalid role.");
  }

  // Create the new booking
  const booking = await Booking.create({
    schedule: scheduleId,
    trainee: traineeId,
  });

  // Add the trainee to the schedule's trainees list
  schedule.trainees.push(traineeId);
  await schedule.save();

  res.status(201).json({
    success: true,
    message: "Booking created successfully",
    booking: booking,
    scheduleDetails: {
      date: schedule.date,
      time: schedule.time,
      trainer: schedule.trainer.name,
      class: schedule.class.name,
    },
  });
});

const deleteBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (!booking) {
    res.status(404);
    throw new Error("Booking not found.");
  }

  // Delete the booking
  await booking.remove();

  res.status(200).json({ message: "Booking removed successfully" });
});

module.exports = {
  getBookings,
  getBookingById,
  createBooking,
  deleteBooking,
};
