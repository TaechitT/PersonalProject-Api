const express = require("express");
const commentController = require("../controller/commentController");
const router = express.Router();

router.post("/create", commentController.createComment);
router.get("/:id", commentController.getCommentById);
router.delete("/:id", commentController.deleteComment);
router.put("/:id", commentController.updateComment);

module.exports = router;
