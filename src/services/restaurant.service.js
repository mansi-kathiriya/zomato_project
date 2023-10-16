const { Restaurant } = require("../models");

/**
 * Create Restaurant
 * @param {object} reqBody
 * @returns {Promise<Restaurant>}
 */
const createRestaurant = async (reqBody) => {
    return Restaurant.create(reqBody);
};

/** get Restaurant List */
const getRestaurantList = async (filter, options) => {
    return Restaurant.find()
        .populate("image")
        .populate("owner")
        .populate("city")
};

/** Get Restaurant by name */
const getRestaurantByName = async (name) => {
    return Restaurant.findOne({ name })
};

/** Get Restaurant deatils by id */
const getRestaurantById = async (restaurantId) => {
    return Restaurant.findById(restaurantId);
}

/** Restaurant details update by id */
const updateDetails = async (restaurantId, updateBody) => {
    return Restaurant.findByIdAndUpdate(restaurantId, { $set: updateBody });
}

/** Delete Restaurant */
const deleteRestaurant = async (restaurantId) => {
    return Restaurant.findByIdAndDelete(restaurantId);
}

module.exports = {
    createRestaurant,
    getRestaurantList,
    getRestaurantByName,
    getRestaurantById,
    updateDetails,
    deleteRestaurant,
};