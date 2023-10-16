const { Admin } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<Admin>}
 */
const createAdmin = async (reqBody) => {
    return Admin.create(reqBody);
};

/** get Admin List */
const getAdminList = async (filter, options) => {
    return Admin.find()
};

/** Get user by email */
const getAdminByEmail = async (email) => {
    return Admin.findOne({ email });
};

/** Get user deatils by id */
const getAdminById = async (adminId) => {
    return Admin.findById(adminId);
}

/** user details update by id */
const updateDetails = async (adminId, updateBody) => {
    return Admin.findByIdAndUpdate(adminId, { $set: updateBody });
}

/** Delete Admin */
const deleteAdmin = async (adminId) => {
    return Admin.findByIdAndDelete(adminId);
}

module.exports = {
    createAdmin,
    getAdminList,
    getAdminByEmail,
    getAdminById,
    updateDetails,
    deleteAdmin,
};