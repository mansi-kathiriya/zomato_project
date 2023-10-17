const mongoose = require("mongoose");

const offeritemSchema = new mongoose.Schema(
    {
        offer: {
            type: mongoose.Types.ObjectId,
            ref: "offer",
        },
        item: {
            type: mongoose.Types.ObjectId,
            ref: "item",
        },
        discounted_price: {
            type: Number,
            default: 0,
        },
        free_item_quantity: {
            type: Number,
            default: 0,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Offeritem = mongoose.model("offeritem", offeritemSchema);

module.exports = Offeritem;