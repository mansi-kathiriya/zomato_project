const Joi = require("joi");

/** Create Item */
const createItem = {
    body: Joi.object().keys({
        item: Joi.string().required().trim(),
        category: Joi.string().required().trim(),
        menuitem_name: Joi.string().required().trim(),
        menuitem_desc: Joi.string().required().trim(),
        price: Joi.number().integer(),
        category: Joi.string().required().trim(),
    }),
};

module.exports = {
    createItem,
};