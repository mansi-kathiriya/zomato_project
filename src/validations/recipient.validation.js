const Joi = require("joi");

/** create Recipient */
const createRecipient = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        type: Joi.string().trim().required(),
    })
};

module.exports = {
    createRecipient,
};