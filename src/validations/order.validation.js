const Joi = require("joi");

/** create Order */
const createOrder = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        restaurant: Joi.string().required(),
        order_data: Joi.date().required(),
        status: Joi.string().required().trim(),
    }),
};

module.exports = {
    createOrder
};
