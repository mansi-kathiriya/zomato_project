const mongoose = require("mongoose");

const statSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        country: {
            type: mongoose.Types.ObjectId,
            ref: "country",
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

const Stat = mongoose.model("stat", statSchema);

module.exports = Stat;