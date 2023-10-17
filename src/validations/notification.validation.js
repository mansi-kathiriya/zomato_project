const Joi = require("joi");

/** Notification */
const createNotification = {
    body: Joi.object().keys({
        sender: Joi.string().required().trim(),
        recipient: Joi.string().required().trim(),
        subject: Joi.string().required().trim(),
        message: Joi.string().required().trim(),
        type: Joi.string().required().trim(),
    })
};

module.exports = {
    createNotification
};