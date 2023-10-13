const Joi = require("joi");

/** Create Stat */
const createStat = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
    }),
};

module.exports = {
    createStat
}