const asyncHandler = require("express-async-handler");
const Class = require("./class.model");

const getAllClass = asyncHandler(async (req, res) => {
  const classes = await Class.find({});

  res.status(200).json(classes);
});

const getSingleClass = asyncHandler(async (req, res) => {
  const { classId } = req.params;

  const foundClass = await Class.findById(classId);

  if (!foundClass) {
    res.status(404);
    throw new Error("Class not found");
  }

  res.status(200).json(foundClass);
});

const createClass = asyncHandler(async (req, res) => {
  const { name, description, level, equipment } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Class name is required");
  }

  const newClass = await Class.create({
    name,
    description,
    level,
    equipment,
  });

  res.status(201).json({
    success: true,
    message: "Class created successfully",
    data: newClass,
  });
});

const updateClass = asyncHandler(async (req, res) => {
  const { classId } = req.params;

  const updatedClass = await Class.findByIdAndUpdate(classId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedClass) {
    res.status(404);
    throw new Error("Class not found");
  }

  res.status(200).json({
    success: true,
    message: "Class updated successfully",
    data: updatedClass,
  });
});

const deleteClass = asyncHandler(async (req, res) => {
  const { classId } = req.params;

  const deletedClass = await Class.findByIdAndDelete(classId);

  if (!deletedClass) {
    res.status(404);
    throw new Error("Class not found");
  }

  res.status(200).json({
    success: true,
    message: "Class deleted successfully",
  });
});

module.exports = {
  getAllClass,
  getSingleClass,
  createClass,
  updateClass,
  deleteClass,
};
