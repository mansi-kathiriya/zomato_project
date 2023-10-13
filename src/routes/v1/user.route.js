const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** User register */
router.post(
    "/register",
    validate(userValidation.createUser),
    userController.register
);
//  user login
router.post(
    "/login",
    userController.login
);
// list
router.get(
    "/alluserlist",
    userController.getAllUser
);

/** Create user */
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

/** Get user list */
router.get(
    "/user-list",
    userController.getUserList
);

/** Get user details by id */
router.get(
    "/user-details/:userId",
    userController.getUserDetails,
);

/** Update User */
router.put(
    "/update-details/:userId",
    userController.updateDetails,
);

/** Delete user */
router.delete(
    "/user-delete/:userId",
    userController.deleteUser,
);

module.exports = router;