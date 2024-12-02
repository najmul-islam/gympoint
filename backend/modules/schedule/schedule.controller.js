const asyncHandler = require("express-async-handler");
const Schedule = require("../schedule/schedule.model");
const Class = require("../class/class.model");
const User = require("../user/user.model");

// @desc    Get all schedules
// @route   GET /api/schedules
// @access  Public
const getAllSchedule = asyncHandler(async (req, res) => {
  const schedules = await Schedule.find()
    .populate("class")
    .populate("trainer", "-password")
    .populate("trainees", "-password");

  res.status(200).json(schedules);
});

// @desc    Get schedule by ID
// @route   GET /api/schedules/:id
// @access  Public
const getSingleSchedule = asyncHandler(async (req, res) => {
  const schedule = await Schedule.findById(req.params.id)
    .populate("class")
    .populate("trainer")
    .populate("trainees");

  if (!schedule) {
    res.status(404);
    throw new Error("Schedule not found.");
  }

  res.status(200).json(schedule);
});

// @desc    Create a new schedule
// @route   POST /api/schedules
// @access  Private
const createSchedule = asyncHandler(async (req, res) => {
  const { date, time, class: classId, trainer: trainerId, trainees } = req.body;

  // Validate input
  if (!date || !time || !classId || !trainerId) {
    res.status(400);
    throw new Error(
      "Please provide all required fields (date, time, class, trainer)."
    );
  }

  const parsedDate = new Date(date);
  const dayStart = new Date(parsedDate.setHours(0, 0, 0, 0));
  const dayEnd = new Date(parsedDate.getTime()).setHours(23, 59, 59, 999);

  const existingSchedules = await Schedule.find({
    date: { $gte: dayStart, $lte: dayEnd },
  });

  if (existingSchedules.length >= 5) {
    res.status(400);
    throw new Error("You cannot create more than 5 classes on the same day.");
  }

  const classTime = new Date(`1970-01-01T${time}:00`);
  const classEndTime = new Date(classTime.getTime() + 2 * 60 * 60 * 1000);

  const schedule = await Schedule.create({
    date: classEndTime,
    time: classTime,
    class: classId,
    trainer: trainerId,
  });

  res.status(201).json({
    success: true,
    message: "Schedule created successfully",
    data: schedule,
  });

  res.status(201).json(schedule);
});

// @desc    Update schedule by ID
// @route   PUT /api/schedules/:id
// @access  Private
const updateSchedule = asyncHandler(async (req, res) => {
  const { date, time, class: classId, trainer, trainees } = req.body;

  // Check if the schedule exists
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    res.status(404);
    throw new Error("Schedule not found.");
  }

  // Validate class and trainer
  const classExists = await Class.findById(classId);
  if (!classExists) {
    res.status(404);
    throw new Error("Class not found.");
  }

  const trainerExists = await User.findById(trainer);
  if (!trainerExists) {
    res.status(404);
    throw new Error("Trainer not found.");
  }

  // Update schedule
  schedule.date = date || schedule.date;
  schedule.time = time || schedule.time;
  schedule.class = classId || schedule.class;
  schedule.trainer = trainer || schedule.trainer;
  schedule.trainees = trainees || schedule.trainees;

  const updatedSchedule = await schedule.save();

  res.status(200).json(updatedSchedule);
});

// @desc    Delete schedule by ID
// @route   DELETE /api/schedules/:id
// @access  Private
const deleteSchedule = asyncHandler(async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);

  if (!schedule) {
    res.status(404);
    throw new Error("Schedule not found.");
  }

  // Delete the schedule
  await schedule.remove();

  res.status(200).json({ message: "Schedule removed successfully" });
});

module.exports = {
  getAllSchedule,
  getSingleSchedule,
  createSchedule,
  updateSchedule,
  deleteSchedule,
};
