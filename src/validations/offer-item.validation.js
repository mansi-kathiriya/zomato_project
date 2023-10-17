const Joi = require("joi");

/** create offer item */
const createOffer_item = {
    body: Joi.object().keys({
        offer: Joi.string().required(),
        item: Joi.string().required(),
        discounted_price: Joi.number().integer(),
        free_item_quantity: Joi.number().integer(),

    })
};

module.exports = {
    createOffer_item
};