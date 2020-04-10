const router = require("express").Router();
const path = require("path");

//directly linking to html & set url

router.get("/excercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

//one for stats too

module.exports = router;