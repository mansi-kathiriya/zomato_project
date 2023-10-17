const { Offer } = require("../models");

/**
 * Create Offer
 * @param {object} reqBody
 * @returns {Promise<Offer>}
 */
const createOffer = async (reqBody) => {
    return Offer.create(reqBody);
};

/** get Offer List */
const getOfferList = async (filter, options) => {
    return Offer.find().populate("restaurant");
};

/** Get Offer by name */
const getOfferByName = async (name) => {
    return Offer.findOne({ name })
};

/** Get Offer deatils by id */
const getOfferById = async (offerId) => {
    return Offer.findById(offerId);
}

/** Offer details update by id */
const updateDetails = async (offerId, updateBody) => {
    return Offer.findByIdAndUpdate(offerId, { $set: updateBody });
}

/** Delete Offer */
const deleteOffer = async (offerId) => {
    return Offer.findByIdAndDelete(offerId);
}

module.exports = {
    createOffer,
    getOfferList,
    getOfferByName,
    getOfferById,
    updateDetails,
    deleteOffer,
};