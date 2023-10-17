const Joi = require("joi");

/** create Sender */
const createSender = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        type: Joi.string().trim().required(),
    })
};

module.exports = {
    createSender,
};