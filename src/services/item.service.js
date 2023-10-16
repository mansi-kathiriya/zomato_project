const { Item } = require("../models");

/**
 * Create Item
 * @param {object} reqBody
 * @returns {Promise<Item>}
 */
const createItem = async (reqBody) => {
    return Item.create(reqBody);
};

/** get Item List */
const getItemList = async (filter, options) => {
    return Item.find().populate("category");
};

/** Get Item by name */
const getItemByName = async (name) => {
    return Item.findOne({ name })
};

/** Get Item deatils by id */
const getItemById = async (itemId) => {
    return Item.findById(itemId);
}

/** Item details update by id */
const updateDetails = async (itemId, updateBody) => {
    return Item.findByIdAndUpdate(itemId, { $set: updateBody });
}

/** Delete Item */
const deleteItem = async (itemId) => {
    return Item.findByIdAndDelete(itemId);
}

module.exports = {
    createItem,
    getItemList,
    getItemByName,
    getItemById,
    updateDetails,
    deleteItem,
};