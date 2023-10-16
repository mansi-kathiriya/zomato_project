const Joi = require("joi");

/** Create Stat */
const createStat = {
    body: Joi.object().keys({
        country: Joi.string().required().trim(),
        name: Joi.string().required().trim(),
    }),
};

module.exports = {
    createStat,
}