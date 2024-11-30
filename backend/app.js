const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});
app.listen(8000, console.log(`app is listening port 8000`));
