const { Driver } = require("../models");

/**
 * Create Driver
 * @param {object} reqBody
 * @returns {Promise<Driver>}
 */
const createDriver = async (reqBody) => {
    return Driver.create(reqBody);
};

/** get Driver List */
const getDriverList = async (filter, options) => {
    return Driver.find()
};

/** Get Driver by name */
const getDriverByName = async (name) => {
    return Driver.findOne({ name })
};

/** Get Driver deatils by id */
const getDriverById = async (driverId) => {
    return Driver.findById(driverId);
}

/** Driver details update by id */
const updateDetails = async (driverId, updateBody) => {
    return Driver.findByIdAndUpdate(driverId, { $set: updateBody });
}

/** Delete Driver */
const deleteDriver = async (driverId) => {
    return Driver.findByIdAndDelete(driverId);
}

module.exports = {
    createDriver,
    getDriverList,
    getDriverByName,
    getDriverById,
    updateDetails,
    deleteDriver,
};