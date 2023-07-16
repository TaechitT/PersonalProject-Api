const express = require("express");
const cardController = require("../controller/cardController");
const router = express.Router();

router.get("/getAllCard", cardController.getAllCard);

module.exports = router;
