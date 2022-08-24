const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");

router.get("/", tourController.output);
router.post("/", tourController.create);

module.exports = router;
