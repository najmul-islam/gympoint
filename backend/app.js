const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("./configs/cors");
const database = require("./configs/database");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/user", require("./modules/user/user.route"));
app.use("/api/classes", require("./modules/class/class.route"));
app.use("/api/trainer", require("./modules/trainer/trainer.route"));
app.use("/api/schedule", require("./modules/schedule/schedule.route"));
app.use("/api/booking", require("./modules/booking/booking.route"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

// error middleware
app.use(require("./middlewares/notfound.middleware"));
app.use(require("./middlewares/error.middleware"));

const start = async () => {
  try {
    await database(process.env.MONGO_URI);
app.listen(
  process.env.PORT,
  console.log(`app is listening port ${process.env.PORT}...`.blue.underline)
);
} catch (error) {
    console.log(error);
  }
};

start();
