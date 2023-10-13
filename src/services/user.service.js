const { User } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
    return User.create(reqBody);
};

/** get User List */
const getUserList = async (filter, options) => {
    return User.find()
};

/** Get user by email */
const getUserByEmail = async (email) => {
    return User.findOne({ email });
};

/** Get user deatils by id */
const getUserById = async (userId) => {
    return User.findById(userId);
}

/** user details update by id */
const updateDetails = async (userId, updateBody) => {
    return User.findByIdAndUpdate(userId, { $set: updateBody });
}

/** Delete User */
const deleteUser = async (userId) => {
    return User.findByIdAndDelete(userId);
}

module.exports = {
    createUser,
    getUserList,
    getUserByEmail,
    getUserById,
    updateDetails,
    deleteUser,
};