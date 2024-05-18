const express = require("express");
const {
  createCommentController,
  singleCommentController,
  deleteCommentController,
  updateCommentController
} = require("../../controllers/comments/commentController");
const commentRouter = express.Router();

commentRouter.post("/", createCommentController);

commentRouter.get("/:id", singleCommentController);

commentRouter.delete("/:id",deleteCommentController);

commentRouter.put("/:id",updateCommentController );

module.exports = commentRouter;
