const Joi = require("joi");

/** create Review */
const createReview = {
    body: Joi.object().keys({
        rating: Joi.number().integer(),
        comment: Joi.string().trim().required(),
        review_date: Joi.date().required(),
        restaurant: Joi.string().trim().required(),
        user: Joi.string().trim().required(),
    })
};

module.exports = {
    createReview,
};