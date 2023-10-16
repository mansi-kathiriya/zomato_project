const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        order: {
            type: mongoose.Types.ObjectId,
            ref: "order"
        },
        Payment_method: {
            type: String,
            trim: true,
        },
        amount: {
            type: Number,
            trim: true,
        },
        transaction_date: {
            type: Date,
            default:Date.now(),
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

const Payment = mongoose.model("payment",paymentSchema);

module.exports = Payment;