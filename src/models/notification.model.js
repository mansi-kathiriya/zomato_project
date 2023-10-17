const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Types.ObjectId,
            ref: "sender",
        },
        recipient: {
            type: mongoose.Types.ObjectId,
            ref: "recipient",
        },
        subject: {
            type: String,
            trim: true,
        },
        message: {
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
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Notification = mongoose.model("notification", notificationSchema);

module.exports = Notification;