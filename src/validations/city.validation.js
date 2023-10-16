const Joi = require("joi");

/** Create City */
const createcity = {
    body: Joi.object().keys({
        country: Joi.string().required().trim(),
        name: Joi.string().required().trim(),
    }),
};

module.exports = {
    createcity,
}