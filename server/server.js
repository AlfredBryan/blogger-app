const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const PostRoutes = require("./routes/postRoutes");


const app = express();

app.use(logger("dev"));

// Setting Headers
app.use(cors());

// Adding the body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", userRoutes);
app.use("/api", PostRoutes);


// Connecting to Database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, autoIndex: false }, () => {
  console.log("Connected to MongoDB");
});
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Setting the port
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
