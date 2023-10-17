const { Offer_item } = require("../models");

/**
 * Create Offer_item
 * @param {object} reqBody
 * @returns {Promise<Offer_item>}
 */
const createOffer_item = async (reqBody) => {
    return Offer_item.create(reqBody);
};

/** get Offer_item List */
const getOffer_itemList = async (filter, options) => {
    return Offer_item.find().populate("restaurant");
};

/** Get Offer_item by name */
const getOffer_itemByName = async (name) => {
    return Offer_item.findOne({ name })
};

/** Get Offer_item deatils by id */
const getOffer_itemById = async (offer_itemId) => {
    return Offer_item.findById(offer_itemId);
}

/** Offer_item details update by id */
const updateDetails = async (offer_itemId, updateBody) => {
    return Offer_item.findByIdAndUpdate(offer_itemId, { $set: updateBody });
}

/** Delete Offer_item */
const deleteOffer_item = async (offer_itemId) => {
    return Offer_item.findByIdAndDelete(offer_itemId);
}

module.exports = {
    createOffer_item,
    getOffer_itemList,
    getOffer_itemByName,
    getOffer_itemById,
    updateDetails,
    deleteOffer_item,
};