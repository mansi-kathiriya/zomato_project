const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
    {
        item_name: {
            type: String,
            trim: true,
        },
        item_desc: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        quantity: {
            type: Number,
            trim: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
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

const Item = mongoose.model("item", itemSchema);

module.exports = Item;