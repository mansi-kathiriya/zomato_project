const { Cart } = require("../models");

/**
 * Create Cart
 * @param {object} reqBody
 * @returns {Promise<Cart>}
 */
const createCart = async (reqBody) => {
    return Cart.create(reqBody);
};

/** get Cart List */
const getCartList = async (filter, options) => {
    return Cart.find().populate("country");
};

/** Get Cart by name */
const getCartByName = async (name) => {
    return Cart.findOne({ name })
};

/** Get Cart deatils by id */
const getCartById = async (cartId) => {
    return Cart.findById(cartId);
}

/** Cart details update by id */
const updateDetails = async (cartId, updateBody) => {
    return Cart.findByIdAndUpdate(cartId, { $set: updateBody });
}

/** Delete Cart */
const deleteCart = async (cartId) => {
    return Cart.findByIdAndDelete(cartId);
}

module.exports = {
    createCart,
    getCartList,
    getCartByName,
    getCartById,
    updateDetails,
    deleteCart,
};