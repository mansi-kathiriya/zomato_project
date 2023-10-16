const mongoose = require("mongoose");

const restaurant_typeSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            trim: true,
        },
        desc: {
            type: String,
            trim: true,
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

const Restaurant_type = mongoose.model("restaurant type", restaurant_typeSchema);

module.exports = Restaurant_type;