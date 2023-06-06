const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./config/database");
app.use(express.json()); // Creates req.body
app.use(morgan("dev"));
app.use(cors());
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Express app is running on port:${port}`);
});