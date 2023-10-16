const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        rating: {
            type: Number,
            default: 2,
        },
        comment: {
            type: String,
            trim: true,
        },
        review_date: {
            type: Date,
            default: Date.now(),
        },
        restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;