const express = require("express");

const postRouter = express.Router();
const {
  createPostController,
  allPostController,
  singlePostController,
  deletePostController,
  updatePostController
} = require("../../controllers/posts/postController");

//  create post
postRouter.post("/", createPostController);

// get all posts
postRouter.get("/", allPostController);

//  single post
postRouter.get("/:id", singlePostController);

// delete a post
postRouter.delete("/:id",deletePostController );

//   update post
postRouter.put("/:id",updatePostController );

module.exports = postRouter;
