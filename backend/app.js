const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

app.listen(
  process.env.PORT,
  console.log(`app is listening port ${process.env.PORT}`)
);
