const { Order } = require("../models");

/**
 * Create Order
 * @param {object} reqBody
 * @returns {Promise<Order>}
 */
const createOrder = async (reqBody) => {
    return Order.create(reqBody);
};

/** get Order List */
const getOrderList = async (filter, options) => {
    return Order.find()
    .populate("user")
    .populate("restaurant")
};

/** Get Order deatils by id */
const getOrderById = async (orderId) => {
    return Order.findById(orderId);
}

/** Order details update by id */
const updateDetails = async (orderId, updateBody) => {
    return Order.findByIdAndUpdate(orderId, { $set: updateBody });
}

/** Delete Order */
const deleteOrder = async (orderId) => {
    return Order.findByIdAndDelete(orderId);
}

module.exports = {
    createOrder,
    getOrderList,
    getOrderById,
    updateDetails,
    deleteOrder,
};