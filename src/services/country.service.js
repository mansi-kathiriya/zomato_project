const { Country } = require("../models");

/**
 * Create Country
 * @param {object} reqBody
 * @returns {Promise<Country>}
 */
const createCountry = async (reqBody) => {
    return Country.create(reqBody);
};

/** get Country List */
const getCountryList = async (filter, options) => {
    return Country.find()
};

/** Get Country by name */
const getCountryByName = async (name) => {
    return Country.findOne({ name })
};

/** Get Country deatils by id */
const getCountryById = async (countryId) => {
    return Country.findById(countryId);
}

/** Country details update by id */
const updateDetails = async (countryId, updateBody) => {
    return Country.findByIdAndUpdate(countryId, { $set: updateBody });
}

/** Delete Country */
const deleteCountry = async (countryId) => {
    return Country.findByIdAndDelete(countryId);
}

module.exports = {
    createCountry,
    getCountryList,
    getCountryByName,
    getCountryById,
    updateDetails,
    deleteCountry,
};