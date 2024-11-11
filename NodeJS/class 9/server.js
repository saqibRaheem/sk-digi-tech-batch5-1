const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./routes/router");
const app = express();
const path = require("path");
app.use(bodyParser.json());

app.use(express.static(path.resolve(path.join(__dirname, "public"))));

require("dotenv").config();
app.use( route);

mongoose
  .connect(process.env.db_URL)
  .then(() => {
    console.log("connected!");
  })
  .catch(() => {
    console.log("not connected!");
  });

app.listen(5000, () => {
  console.log("app is running on port  " + 5000);
});
