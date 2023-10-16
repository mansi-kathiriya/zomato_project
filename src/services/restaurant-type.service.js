const { Restaurant_type } = require("../models");

/**
 * Create Restaurant type
 * @param {object} reqBody
 * @returns {Promise<Restaurant_type>}
 */
const createRestaurant_type = async (reqBody) => {
    return Restaurant_type.create(reqBody);
};

/** get Restaurant type List */
const getRestaurant_typeList = async (filter, options) => {
    return Restaurant_type.find();
};

/** Get Restaurant type by name */
const getRestaurant_typeByName = async (type) => {
    return Restaurant_type.findOne({ type })
};

/** Get Restaurant type deatils by id */
const getRestaurant_typeById = async (restaurant_typeId) => {
    return Restaurant_type.findById(restaurant_typeId);
}

/** Restaurant type details update by id */
const updateDetails = async (restaurant_typeId, updateBody) => {
    return Restaurant_type.findByIdAndUpdate(restaurant_typeId, { $set: updateBody });
}

/** Delete Restaurant type */
const deleteRestaurant_type = async (restaurant_typeId) => {
    return Restaurant_type.findByIdAndDelete(restaurant_typeId);
}

module.exports = {
    createRestaurant_type,
    getRestaurant_typeList,
    getRestaurant_typeByName,
    getRestaurant_typeById,
    updateDetails,
    deleteRestaurant_type,
};