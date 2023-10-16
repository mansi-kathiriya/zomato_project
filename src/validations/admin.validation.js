const Joi = require("joi");

/** Create Admin */
const createAdmin = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        user: Joi.string().required().trim(),
    }),
};

module.exports = {
    createAdmin,
};