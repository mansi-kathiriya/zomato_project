const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users"
        },
        menuitem: {
            type: mongoose.Types.ObjectId,
            ref: "menuitem"
        },
        cart_status: {
            type: String,
            trim: true,
        },
        quantity: {
            type: Number,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    });

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;