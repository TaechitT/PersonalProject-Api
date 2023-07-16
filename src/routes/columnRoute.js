const express = require("express");
const columnController = require("../controller/columnController");
const upload = require("../middlewares/upload");
const router = express.Router();

router.get("/getAllColumn", columnController.getAllColumn);
router.post("/create", upload.array("image"), columnController.createColumn);
router.get("/:id", columnController.getColumnById);
router.delete("/:id", columnController.deleteColumn);
router.patch("/:id", upload.array("image"), columnController.updateColumn);

module.exports = router;
