var express = require("express");
var router = express.Router();

const mainController = require("../controller/maincontroller");
const mw = require("../middleware/auth");

// Single Aggregator Route
router.get("/", mw.authcheck, mainController.getalldata);

module.exports = router;