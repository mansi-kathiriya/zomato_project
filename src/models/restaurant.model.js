const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        phone_no: {
            type: Number,
            trim: true,
        },
        image: {
            type: mongoose.Types.ObjectId,
            ref: "image",
        },
        owner: {
            type: mongoose.Types.ObjectId,
            ref: "owner",
        },
        city: {
            type: mongoose.Types.ObjectId,
            ref: "city",
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = Restaurant;