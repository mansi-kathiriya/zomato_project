const mongoose = require("mongoose");

const recipientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        type: {
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

const Recipient = mongoose.model("recipient", recipientSchema);

module.exports = Recipient;