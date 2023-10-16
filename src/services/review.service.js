const { Review } = require("../models");

/**
 * Create Review
 * @param {object} reqBody
 * @returns {Promise<Review>}
 */
const createReview = async (reqBody) => {
    return Review.create(reqBody);
};

/** get Review List */
const getReviewList = async (filter, options) => {
    return Review.find()
    .populate("restaurant")
    .populate("user")
};

/** Get Review by name */
const getReviewByName = async (review_date) => {
    return Review.findOne({ review_date })
};

/** Get Review deatils by id */
const getReviewById = async (reviewId) => {
    return Review.findById(reviewId);
}

/** Review details update by id */
const updateDetails = async (reviewId, updateBody) => {
    return Review.findByIdAndUpdate(reviewId, { $set: updateBody });
}

/** Delete Review */
const deleteReview = async (reviewId) => {
    return Review.findByIdAndDelete(reviewId);
}

module.exports = {
    createReview,
    getReviewList,
    getReviewByName,
    getReviewById,
    updateDetails,
    deleteReview,
};