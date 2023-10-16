const Joi = require("joi");

/** Create Restaurant type */
const createrestaurant_type = {
    body: Joi.object().keys({
        country: Joi.string().required().trim(),
        name: Joi.string().required().trim(),
    }),
};

module.exports = {
    createrestaurant_type,
}