const { Sender } = require("../models");

/**
 * Create Sender
 * @param {object} reqBody
 * @returns {Promise<Sender>}
 */
const createSender = async (reqBody) => {
    return Sender.create(reqBody);
};

/** get Sender List */
const getSenderList = async (filter, options) => {
    return Sender.find();
};

/** Get Sender by name */
const getSenderByName = async (name) => {
    return Sender.findOne({ name })
};

/** Get Sender deatils by id */
const getSenderById = async (senderId) => {
    return Sender.findById(senderId);
}

/** Sender details update by id */
const updateDetails = async (senderId, updateBody) => {
    return Sender.findByIdAndUpdate(senderId, { $set: updateBody });
}

/** Delete Sender */
const deleteSender = async (senderId) => {
    return Sender.findByIdAndDelete(senderId);
}

module.exports = {
    createSender,
    getSenderList,
    getSenderByName,
    getSenderById,
    updateDetails,
    deleteSender,
};