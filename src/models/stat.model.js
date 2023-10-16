const mongoose = require("mongoose");

const statSchema = new mongoose.Schema(
    {
        country: {
            type: mongoose.Types.ObjectId,
            ref: "country",
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

const Stat = mongoose.model("stat", statSchema);

module.exports = Stat;