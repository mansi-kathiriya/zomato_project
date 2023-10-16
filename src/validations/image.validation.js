const Joi = require("joi");

// create Image
const createImage = {
    body: Joi.object().keys({
        image: Joi.string().allow(""),
        image_name: Joi.string().required().trim(),
        image_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createImage
};