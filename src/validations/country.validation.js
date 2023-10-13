const Joi = require("joi");

const createCountry = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
    }),
};

module.exports = {
    createCountry
}