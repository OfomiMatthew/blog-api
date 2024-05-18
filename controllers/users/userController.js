const User = require("../../model/User/User");
const bcrypt = require("bcryptjs");

const userRegisterController = async (req, res) => {
  const { firstname, lastname, profilePhoto, email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.json({
        message: "user already exists",
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create user
    const userCreate = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    res.json({
      status: "success",
      data: userCreate,
      message: "User registered",
    });
  } catch (e) {
    res.json(e.message);
  }
};

const userLoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.json({
        message: "Invalid login credentials",
      });
    }

    const isPasswordMatched = await bcrypt.compare(
      password,
      userFound.password
    );
    if (!isPasswordMatched) {
      return res.json({
        message: "Invalid login credentials",
      });
    }

    res.json({
      status: "success",
      message: "User logged in",
      data:userFound
    });
  } catch (e) {
    res.json(e.message);
  }
};

const userProfileController = async (req, res) => {
  const {id} = req.params
  try {
    const user = await User.findById(id)

    return res.json({
      status: "success",
      data: user,
    });
  } catch (e) {
    res.json(e.message);
  }
};

const usersController = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "All users",
    });
  } catch (e) {
    res.json(e.message);
  }
};

const deleteUserController = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Delete users",
    });
  } catch (e) {
    res.json(e.message);
  }
};

const updateUserController = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "User updated",
    });
  } catch (e) {
    res.json(e.message);
  }
};

module.exports = {
  userRegisterController,
  userLoginController,
  userProfileController,
  usersController,
  deleteUserController,
  updateUserController,
};
