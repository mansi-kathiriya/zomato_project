const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Types.ObjectId,
            ref: "order"
        },
        driver: {
            type: mongoose.Types.ObjectId,
            ref: "driver"
        },
        delivery_time: {
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
        versionKey: false
    });

const Delivery = mongoose.model("delivery", deliverySchema);

module.exports = Delivery;