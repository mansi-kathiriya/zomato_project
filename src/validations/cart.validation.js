const Joi = require("joi");

//  create category
const createCategory = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        menuitem: Joi.string().required(),
        cart_status: Joi.string().required().trim(),
        quantity: Joi.string().required().trim(),
    }),
};
module.exports = {
    createCategory,
};