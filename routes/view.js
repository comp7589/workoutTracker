const router = require("express").Router();
const path = require("path");

//directly linking to html & set url

// router.get("/", (req, res) => {
//     res.redirect("/exercise");
// });
//??
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

//one for stats too
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/stats.html"))
});

module.exports = router;