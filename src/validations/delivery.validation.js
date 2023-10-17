const Joi = require("joi");

/** create delivery */
const createDelivery = {
    body: Joi.object().keys({
        order: Joi.string().required().trim(),
        driver: Joi.number().integer(),
        delivery_time: Joi.date().required(),
        status: Joi.string().required().trim(),
    }),
};
module.exports = {
    createDelivery,
};