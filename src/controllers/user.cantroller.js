const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";
const { userService } = require("../services");
const { auth } = require("../middlewares/auth");

/** Register user */
const register = async (req, res) => {
  const { email, password, role } = req.body;

  const hashPassword = await bcrypt.hash(password, 8);

  let option = {
    email,
    role,
    exp: moment().add(1, "days").unix(),
  };

  const token = await jwt.sign(option, jwtSecrectKey);

  const filter = {
    email,
    role,
    password: hashPassword,
    token,
  };

  const data = await userService.createUser(filter);

  res.status(200).json({ data });
};

/** Login user */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await userService.findUserByEmail({ email });

    if (!findUser) throw Error("User not found");

    const successPassword = await bcrypt.compare(password, findUser.password);
    if (!successPassword) throw Error("Incorrect password");

    let option = {
      email,
      role: findUser.role,
      exp: moment().add(1, "days").unix(),
    };

    let token;
    if (findUser && successPassword) {
      token = await jwt.sign(option, jwtSecrectKey);
    }

    let data;
    if (token) {
      data = await userService.findUserAndUpdate(findUser._id, token);
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/** Get all user */
const getAllUser = async (req, res) => {
  try {
    await auth(req.headers.token, ['admin']);

    const data = await userService.getAllUser({ role: "admin" });
    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/** Create User */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;

    const userExists = await userService.getUserByEmail(reqBody.email);
    if (userExists) {
      throw new Error("User already craeted by this email!");
    }

    const user = await userService.createUser(reqBody);

    res.status(200).json({
      success: true,
      message: "User create successfully!",
      data: { user }
    })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
};

/** Get user list */
const getUserList = async (req, res) => {
  try {
    const getList = await userService.getUserList();

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
};

/** Get user details by id */
const getUserDetails = async (req, res) => {
  try {
    const getDetails = await userService.getUserById(
      req.params.userId
    )
    if (!getDetails) {
      throw new Error("User not found!");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
};

/** Update User */
const updateDetails = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!")
    }

    await userService.updateDetails(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
};

/** Delete User */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!")
    }

    await userService.deleteUser(userId);

    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

module.exports = {
  register,
  login,
  getAllUser,
  createUser,
  getUserList,
  getUserDetails,
  updateDetails,
  deleteUser
};