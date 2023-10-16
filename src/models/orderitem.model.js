const mongoose = require("mongoose");

const orderitemSchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Types.ObjectId,
            ref: "order"
        },
        menuitem: {
            type: mongoose.Types.ObjectId,
            ref: "menuitem"
        },
        quantity: {
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

const Orderitem = mongoose.model("orderitem", orderitemSchema);

module.exports = Orderitem;