const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();

//if deployed, use the deployed database. Otherwise use mongoHeadlines db.
var MONGODB_URI = process.env.MONGODB_URI || "monogodb://localhost/workout";



app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));

mongoose.connect(MONGODB_URI);
// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});