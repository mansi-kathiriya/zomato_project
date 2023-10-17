const { Recipient } = require("../models");

/**
 * Create Recipient
 * @param {object} reqBody
 * @returns {Promise<Recipient>}
 */
const createRecipient = async (reqBody) => {
    return Recipient.create(reqBody);
};

/** get Recipient List */
const getRecipientList = async (filter, options) => {
    return Recipient.find();
};

/** Get Recipient by name */
const getRecipientByName = async (name) => {
    return Recipient.findOne({ name })
};

/** Get Recipient deatils by id */
const getRecipientById = async (recipientId) => {
    return Recipient.findById(recipientId);
}

/** Recipient details update by id */
const updateDetails = async (recipientId, updateBody) => {
    return Recipient.findByIdAndUpdate(recipientId, { $set: updateBody });
}

/** Delete Recipient */
const deleteRecipient = async (recipientId) => {
    return Recipient.findByIdAndDelete(recipientId);
}

module.exports = {
    createRecipient,
    getRecipientList,
    getRecipientByName,
    getRecipientById,
    updateDetails,
    deleteRecipient,
};