const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        phone_no: {
            type: Number,
            default: 0,
        },
        vehicle_info: {
            type: String,
            trim: true,
        },
        location: {
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

const Driver = mongoose.model("driver", driverSchema);

module.exports = Driver;