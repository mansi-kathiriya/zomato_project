const { Orderitem } = require("../models");

/**
 * Create Orderitem
 * @param {object} reqBody
 * @returns {Promise<Orderitem>}
 */
const createOrderitem = async (reqBody) => {
    return Orderitem.create(reqBody);
};

/** get Orderitem List */
const getOrderitemList = async (filter, options) => {
    return Orderitem.find().populate("country");
};

/** Get Orderitem deatils by id */
const getOrderitemById = async (orderitemId) => {
    return Orderitem.findById(orderitemId);
}

/** Orderitem details update by id */
const updateDetails = async (orderitemId, updateBody) => {
    return Orderitem.findByIdAndUpdate(orderitemId, { $set: updateBody });
}

/** Delete Orderitem */
const deleteOrderitem = async (orderitemId) => {
    return Orderitem.findByIdAndDelete(orderitemId);
}

module.exports = {
    createOrderitem,
    getOrderitemList,
    getOrderitemById,
    updateDetails,
    deleteOrderitem,
};