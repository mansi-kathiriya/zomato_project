const { City } = require("../models");

/**
 * Create City
 * @param {object} reqBody
 * @returns {Promise<City>}
 */
const createCity = async (reqBody) => {
    return City.create(reqBody);
};

/** get City List */
const getCityList = async (filter, options) => {
    return City.find().populate("country");
};

/** Get City by name */
const getCityByName = async (name) => {
    return City.findOne({ name })
};

/** Get City deatils by id */
const getCityById = async (cityId) => {
    return City.findById(cityId);
}

/** City details update by id */
const updateDetails = async (cityId, updateBody) => {
    return City.findByIdAndUpdate(cityId, { $set: updateBody });
}

/** Delete City */
const deleteCity = async (cityId) => {
    return City.findByIdAndDelete(cityId);
}

module.exports = {
    createCity,
    getCityList,
    getCityByName,
    getCityById,
    updateDetails,
    deleteCity,
};