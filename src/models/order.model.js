const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        order_data: {
            type: Date,
            default: Date.now(),
        },
        status: {
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
        versionKey: false,
    }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;