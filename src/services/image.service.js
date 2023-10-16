const { Image } = require("../models");

/**
 * Create Image
 * @param {object} reqBody
 * @returns {Promise<Image>}
 */
const createImage = async (reqBody) => {
    return Image.create(reqBody);
};

/** get Image List */
const getImageList = async (filter, options) => {
    return Image.find();
};

/** Get Image by name */
const getImageByName = async (name) => {
    return Image.findOne({ name })
};

/** Get Image deatils by id */
const getImageById = async (imageId) => {
    return Image.findById(imageId);
}

/** Image details update by id */
const updateDetails = async (imageId, updateBody) => {
    return Image.findByIdAndUpdate(imageId, { $set: updateBody });
}

/** Delete Image */
const deleteImage = async (imageId) => {
    return Image.findByIdAndDelete(imageId);
}

module.exports = {
    createImage,
    getImageList,
    getImageByName,
    getImageById,
    updateDetails,
    deleteImage,
};