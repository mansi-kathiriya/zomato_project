const Joi = require("joi");

/** create Orderitem */
const createOrderitem = {
    body: Joi.object().keys({
        order: Joi.string().required(),
        menuitem: Joi.string().required().trim(),
        quantity: Joi.number().integer().required(),
    }),
};

module.exports = {
    createOrderitem,
};
