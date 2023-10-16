const Joi = require("joi");

/** Create Stat */
const createstat = {
    body: Joi.object().keys({
        country: Joi.string().required().trim(),
        name: Joi.string().required().trim(),
    }),
};

module.exports = {
    createstat,
}