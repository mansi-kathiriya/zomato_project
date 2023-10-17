const { Delivery } = require("../models");

/**
 * Create Delivery
 * @param {object} reqBody
 * @returns {Promise<Delivery>}
 */
const createDelivery = async (reqBody) => {
    return Delivery.create(reqBody);
};

/** get Delivery List */
const getDeliveryList = async (filter, options) => {
    return Delivery.find()
};

/** Get Delivery by name */
const getDeliveryByName = async (name) => {
    return Delivery.findOne({ name })
};

/** Get Delivery deatils by id */
const getDeliveryById = async (deliveryId) => {
    return Delivery.findById(deliveryId);
}

/** Delivery details update by id */
const updateDetails = async (deliveryId, updateBody) => {
    return Delivery.findByIdAndUpdate(deliveryId, { $set: updateBody });
}

/** Delete Delivery */
const deleteDelivery = async (deliveryId) => {
    return Delivery.findByIdAndDelete(deliveryId);
}

module.exports = {
    createDelivery,
    getDeliveryList,
    getDeliveryByName,
    getDeliveryById,
    updateDetails,
    deleteDelivery,
};