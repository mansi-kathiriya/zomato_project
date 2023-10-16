const Joi = require("joi");

/** Create Item */
const createItem = {
    body: Joi.object().keys({
        item_name: Joi.string().required().trim(),
        item_desc: Joi.string().required().trim(),
        price: Joi.number().integer(),
        quantity: Joi.number().integer(),
        category: Joi.string().required().trim(),
    }),
};

module.exports = {
    createItem,
};