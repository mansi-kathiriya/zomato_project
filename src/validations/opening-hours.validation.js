const Joi = require("joi");

// create Opening hours
const createopening_hours = {
    body: Joi.object().keys({
        restaurant: Joi.string(),
        open_time: Joi.string().trim().required(),
        close_time: Joi.string().trim().required(),
        day_of_week: Joi.string().trim().required(),
    })
};

module.exports = {
    createopening_hours,
};