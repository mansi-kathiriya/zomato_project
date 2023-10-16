const Joi = require("joi");

/** Create Country */
const createcountry = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
    }),
};

module.exports = {
    createcountry
}