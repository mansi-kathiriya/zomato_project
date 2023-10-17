const { Notification } = require("../models");

/**
 * Create Notification
 * @param {object} reqBody
 * @returns {Promise<Notification>}
 */
const createNotification = async (reqBody) => {
    return Notification.create(reqBody);
};

/** get Notification List */
const getNotificationList = async (filter, options) => {
    return Notification.find()
    .populate("sender")
    .populate("recipient")
};

/** Get Notification by name */
const getNotificationByName = async (name) => {
    return Notification.findOne({ name })
};

/** Get Notification deatils by id */
const getNotificationById = async (notificationId) => {
    return Notification.findById(notificationId);
}

/** Notification details update by id */
const updateDetails = async (notificationId, updateBody) => {
    return Notification.findByIdAndUpdate(notificationId, { $set: updateBody });
}

/** Delete Notification */
const deleteNotification = async (notificationId) => {
    return Notification.findByIdAndDelete(notificationId);
}

module.exports = {
    createNotification,
    getNotificationList,
    getNotificationByName,
    getNotificationById,
    updateDetails,
    deleteNotification,
};