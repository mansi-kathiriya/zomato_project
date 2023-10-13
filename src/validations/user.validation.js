const Joi = require("joi");

/** Create user */
const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        phone: Joi.number().integer().trim(),
        address: Joi.string().required().trim(),
        role: Joi.string().required().trim(),
        token: Joi.string().required().trim(),
    }),
};

module.exports = {
    createUser,
};