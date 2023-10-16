const Joi = require("joi");

/** Create Country */
const createCountry = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
    }),
};

module.exports = {
    createCountry
}