const Joi = require("joi");

/** create driver */
const createDriver = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        phone_no: Joi.number().integer(),
        vehicle_info: Joi.string().required().trim(),
        location: Joi.string().required().trim(),
    }),
};
module.exports = {
    createDriver,
};