const mongoose = require("mongoose");

const opening_hoursSchema = new mongoose.Schema(
    {
        restaurant:{
            type:mongoose.Types.ObjectId,
            ref:"restaurant",
        },
        open_time: {
            type: String,
            trim: true,
        },
        close_time: {
            type: String,
            trim: true,
        },
        day_of_week: {
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

const Opening_hours = mongoose.model("opening hours", opening_hoursSchema);
module.exports = Opening_hours;