const { Menuitem } = require("../models");

/**
 * Create Menuitem
 * @param {object} reqBody
 * @returns {Promise<Menuitem>}
 */
const createMenuitem = async (reqBody) => {
    return Menuitem.create(reqBody);
};

/** get Menuitem List */
const getMenuitemList = async (filter, options) => {
    return Menuitem.find()
     .populate("category")
     .populate("item")
};

/** Get Menuitem by name */
const getMenuitemByName = async (menuitem_name) => {
    return Menuitem.findOne({ menuitem_name })
};

/** Get Menuitem deatils by id */
const getMenuitemById = async (menuitemId) => {
    return Menuitem.findById(menuitemId);
}

/** Menuitem details update by id */
const updateDetails = async (menuitemId, updateBody) => {
    return Menuitem.findByIdAndUpdate(menuitemId, { $set: updateBody });
}

/** Delete Menuitem */
const deleteMenuitem = async (menuitemId) => {
    return Menuitem.findByIdAndDelete(menuitemId);
}

module.exports = {
    createMenuitem,
    getMenuitemList,
    getMenuitemByName,
    getMenuitemById,
    updateDetails,
    deleteMenuitem,
};