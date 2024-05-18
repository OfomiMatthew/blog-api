const express = require("express");
const {
  createCategoryController,
  singleCategoryController,
  deleteCategoryController,
  updateCategoryController
} = require("../../controllers/categories/categoryController");
const categoryRouter = express.Router();

categoryRouter.post("/", createCategoryController);

categoryRouter.get("/:id",singleCategoryController);

categoryRouter.delete("/:id",deleteCategoryController );

categoryRouter.put("/:id", updateCategoryController);

module.exports = categoryRouter;
