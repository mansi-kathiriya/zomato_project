const Joi = require("joi");

/** Create Restaurant */
const createRestaurant = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        address: Joi.string().required().trim(),
        phone_no: Joi.number().integer(),
        image: Joi.string().required().trim(),
        owner: Joi.string().required().trim(),
        city: Joi.string().required().trim(),
    }),
};

module.exports = {
    createRestaurant,
};