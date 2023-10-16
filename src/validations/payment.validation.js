const Joi = require("joi");

/** create Payment */
const createPayment = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        order: Joi.string().required(),
        Payment_method: Joi.string().required().trim(),
        amount: Joi.number().integer().required(),
        transaction_date: Joi.date().required(),
    }),
};

module.exports = {
    createPayment
};
