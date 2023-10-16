const { Payment } = require("../models");

/**
 * Create Payment
 * @param {object} reqBody
 * @returns {Promise<Payment>}
 */
const createPayment = async (reqBody) => {
    return Payment.create(reqBody);
};

/** get Payment List */
const getPaymentList = async (filter, options) => {
    return Payment.find().populate("country");
};

/** Get Payment by name */
const getPaymentByName = async (name) => {
    return Payment.findOne({ name })
};

/** Get Payment deatils by id */
const getPaymentById = async (paymentId) => {
    return Payment.findById(paymentId);
}

/** Payment details update by id */
const updateDetails = async (paymentId, updateBody) => {
    return Payment.findByIdAndUpdate(paymentId, { $set: updateBody });
}

/** Delete Payment */
const deletePayment = async (paymentId) => {
    return Payment.findByIdAndDelete(paymentId);
}

module.exports = {
    createPayment,
    getPaymentList,
    getPaymentByName,
    getPaymentById,
    updateDetails,
    deletePayment,
};