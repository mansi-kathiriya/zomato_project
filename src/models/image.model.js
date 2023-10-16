const mongoose = require("mongoose");
const config = require("../config/config");

const imageSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            trim: true,
        },
        image_name: {
            type: String,
            trim: true,
        },
        image_desc: {
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
        toJSON: {
            transform: function (doc, data){
                if(data?.image){
                    data.image = `${config.base_url}image/${data.image}`
                }
            }
        }
    }
)

const Image = mongoose.model("image",imageSchema);

module.exports = Image;