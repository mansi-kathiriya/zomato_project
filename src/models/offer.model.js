const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
    {
        restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        start_date: {
            type: Date,
            default: Date.now(),
        },
        end_date: {
            type: Date,
            default: Date.now(),
        },
        discount: {
            type: String,
            trim: true,
        },
        coupon_code: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionkey: false
    }
);

const Offer = mongoose.model("offer", offerSchema);

module.exports = Offer;