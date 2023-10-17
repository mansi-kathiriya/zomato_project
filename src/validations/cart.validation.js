const Joi = require("joi");

//  create cart
const createCart = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        menuitem: Joi.string().required(),
        cart_status: Joi.string().required().trim(),
        quantity: Joi.number().integer(),
    }),
};
module.exports = {
    createCart,
};