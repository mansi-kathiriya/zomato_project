const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            trim: true,
        },
        phone: {
            type: Number,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        role: {
            type: String,
            enum: ["admin", "user", "subadmin"],
        },
        token: {
            type: String
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

userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.password = bcrypt.hash(user.password, 8);
    }
    next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;