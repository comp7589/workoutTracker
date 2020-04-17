const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();
//if deployed, use the deployed database. Otherwise..
var MONGODB_URI = process.env.MONGODB_URI || "monogodb://localhost/workout";

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4 // Use IPv4, skip trying IPv6
  };


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));

// PRE_db_DEPLOY
// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

//db_DEPLOY
mongoose.connect(MONGODB_URI,options);

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});