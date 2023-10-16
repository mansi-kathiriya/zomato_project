const Joi = require("joi");

/** Create Restaurant type */
const createRestaurant_type = {
    body: Joi.object().keys({
        country: Joi.string().required().trim(),
        name: Joi.string().required().trim(),
    }),
};

module.exports = {
    createRestaurant_type,
}