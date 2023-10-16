const { Owner } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<Owner>}
 */
const createOwner = async (reqBody) => {
    return Owner.create(reqBody);
};

/** get Owner List */
const getOwnerList = async (filter, options) => {
    return Owner.find()
};

/** Get user by email */
const getOwnerByEmail = async (email) => {
    return Owner.findOne({ email });
};

/** Get user deatils by id */
const getOwnerById = async (ownerId) => {
    return Owner.findById(ownerId);
}

/** user details update by id */
const updateDetails = async (ownerId, updateBody) => {
    return Owner.findByIdAndUpdate(ownerId, { $set: updateBody });
}

/** Delete Owner */
const deleteOwner = async (ownerId) => {
    return Owner.findByIdAndDelete(ownerId);
}

module.exports = {
    createOwner,
    getOwnerList,
    getOwnerByEmail,
    getOwnerById,
    updateDetails,
    deleteOwner,
};