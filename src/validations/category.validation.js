const Joi = require("joi");

// create Category
const createCategory = {
    body: Joi.object().keys({
        category_name: Joi.string().required().trim(),
        category_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createCategory
};