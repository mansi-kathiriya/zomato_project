const mongoose = require("mongoose");

const menuitemSchema = new mongoose.Schema(
    {
        item: {
            type: mongoose.Types.ObjectId,
            ref: "item",
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        },
        menuitem_name: {
            type: String,
            trim: true,
        },
        menuitem_desc: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionkey: false
    }
);

const Menuitem = mongoose.model("menuitem", menuitemSchema);

module.exports = Menuitem;