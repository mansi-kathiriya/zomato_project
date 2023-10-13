const { Stat } = require("../models");

/**
 * Create Stat
 * @param {object} reqBody
 * @returns {Promise<Stat>}
 */
const createStat = async (reqBody) => {
    return Stat.create(reqBody);
};

/** get Stat List */
const getStatList = async (filter, options) => {
    return Stat.find()
};

/** Get Stat by name */
const getStatByName = async (name) => {
    return Stat.findOne({ name })
};

/** Get Stat deatils by id */
const getStatById = async (statId) => {
    return Stat.findById(statId);
}

/** Stat details update by id */
const updateDetails = async (statId, updateBody) => {
    return Stat.findByIdAndUpdate(statId, { $set: updateBody });
}

/** Delete Stat */
const deleteStat = async (statId) => {
    return Stat.findByIdAndDelete(statId);
}

module.exports = {
    createStat,
    getStatList,
    getStatByName,
    getStatById,
    updateDetails,
    deleteStat,
};