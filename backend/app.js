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

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

app.listen(
  process.env.PORT,
  console.log(`app is listening port ${process.env.PORT}`)
);
