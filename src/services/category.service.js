const { Category } = require("../models");

/**
 * Create Category
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const createCategory = async (reqBody) => {
    return Category.create(reqBody);
};

/** get Category List */
const getCategoryList = async (filter, options) => {
    return Category.find();
};

/** Get Category by name */
const getCategoryByName = async (name) => {
    return Category.findOne({ name })
};

/** Get Category deatils by id */
const getCategoryById = async (categoryId) => {
    return Category.findById(categoryId);
}

/** Category details update by id */
const updateDetails = async (categoryId, updateBody) => {
    return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
}

/** Delete Category */
const deleteCategory = async (categoryId) => {
    return Category.findByIdAndDelete(categoryId);
}

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryByName,
    getCategoryById,
    updateDetails,
    deleteCategory,
};