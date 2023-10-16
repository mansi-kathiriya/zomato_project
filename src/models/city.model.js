const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
    {
        country: {
            type: mongoose.Types.ObjectId,
            ref: "country",
        },
        stat: {
            type: mongoose.Types.ObjectId,
            ref: "stat",
        },
        name: {
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

const City = mongoose.model("city", citySchema);

module.exports = City;