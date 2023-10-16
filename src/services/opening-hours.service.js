const { Opening_hours } = require("../models");

/**
 * Create Opening_hours
 * @param {object} reqBody
 * @returns {Promise<Opening_hours>}
 */
const createOpening_hours = async (reqBody) => {
    return Opening_hours.create(reqBody);
};

/** get Opening_hours List */
const getOpening_hoursList = async (filter, options) => {
    return Opening_hours.find().populate("restaurant");
};

/** Get Opening_hours deatils by id */
const getOpening_hoursById = async (opening_hoursId) => {
    return Opening_hours.findById(opening_hoursId);
}

/** Opening_hours details update by id */
const updateDetails = async (opening_hoursId, updateBody) => {
    return Opening_hours.findByIdAndUpdate(opening_hoursId, { $set: updateBody });
}

/** Delete Opening_hours */
const deleteOpening_hours = async (opening_hoursId) => {
    return Opening_hours.findByIdAndDelete(opening_hoursId);
}

module.exports = {
    createOpening_hours,
    getOpening_hoursList,
    getOpening_hoursById,
    updateDetails,
    deleteOpening_hours,
};