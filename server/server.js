const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./config/database");
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/dalle", require("./routes/dalle"));
app.use("/api/collections", require("./routes/collections"));
app.use("/api/users", require("./routes/users"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Express app is running on port:${port}`);
});
