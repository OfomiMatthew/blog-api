const express = require("express");
const {
  userRegisterController,
  userLoginController,
  userProfileController,
  usersController,
  deleteUserController,
  updateUserController
} = require("../../controllers/users/userController");
const isLogin = require("../../middlewares/isLogin");


const userRouter = express.Router();

// user registration
userRouter.post("/register", userRegisterController);

//   user login
userRouter.post("/login", userLoginController);

//   get a user
userRouter.get("/profile/",isLogin,userProfileController);

//   get all users
userRouter.get("/", usersController);

//    delete user
userRouter.delete("/:id",deleteUserController );

//  update user
userRouter.put("/:id", updateUserController );

module.exports = userRouter;
