const Joi = require("joi");

/** create offer */

const createOffer = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        start_date: Joi.date().required(),
        end_date: Joi.date().required(),
        discount: Joi.string().trim().required(),
        coupon_code: Joi.string().trim().required(),
        Restaurant: Joi.string().trim().required(),
    })
};

module.exports = {
    createOffer,
};