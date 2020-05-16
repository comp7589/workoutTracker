const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();
//if deployed, use the deployed database. Otherwise..
// var MONGODB_URI = process.env.MONGODB_URI || "monogodb://localhost/workout";

const options = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useFindAndModify: false, 
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
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_8rrngzgp:Compt@n5@ds031597.mlab.com:31597/heroku_8rrngzgp", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});