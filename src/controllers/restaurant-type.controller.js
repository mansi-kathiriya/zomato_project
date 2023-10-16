const { restaurant_typeService } = require("../services");

/** Create Restaurant type */
const createRestaurant_type = async (req, res) => {
    try {
        const reqBody = req.body;

        const r_typeExists = await restaurant_typeService.getRestaurant_typeByName(reqBody);
        if (r_typeExists) {
            throw new Error("please add other Restaurant_type this Restaurant_type already created.");
        }

        const restaurant_type = await restaurant_typeService.createRestaurant_type(reqBody);

        res.Restaurant_typeus(200).json({
            success: true,
            message: "Restaurant_type create successfully!",
            data: { restaurant_type }
        })
    } catch (error) {
        res.Restaurant_typeus(400).json({ success: false, message: error.message })
    }
};

/** Get Restaurant type list */
const getRestaurant_typeList = async (req, res) => {
    try {
        const getList = await restaurant_typeService.getRestaurant_typeList();

        res.Restaurant_typeus(200).json({
            success: true,
            message: "Get Restaurant_type list successfully!",
            data: getList,
        });
    } catch (error) {
        res.Restaurant_typeus(400).json({ success: false, message: error.message })
    }
};

/** Get Restaurant type details by id */
const getRestaurant_typeDetails = async (req, res) => {
    try {
        const getDetails = await restaurant_typeService.getRestaurant_typeById(
            req.params.restaurant_typeId
        )
        if (!getDetails) {
            throw new Error("Restaurant_type not found!");
        }

        res.Restaurant_typeus(200).json({
            success: true,
            message: "Restaurant_type details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.Restaurant_typeus(400).json({ success: false, message: error.message })
    }
};

/** Update Restaurant type */
const updateDetails = async (req, res) => {
    try {
        const restaurant_typeId = req.params.restaurant_typeId;

        const r_typeExists = await restaurant_typeService.getRestaurant_typeById(restaurant_typeId);
        if (!r_typeExists) {
            throw new Error("Restaurant_type not found!")
        }

        await restaurant_typeService.updateDetails(restaurant_typeId, req.body);

        res.Restaurant_typeus(200).json({
            success: true,
            message: "Restaurant_type details update successfully!",
        });
    } catch (error) {
        res.Restaurant_typeus(400).json({ success: false, message: error.message })
    }
};

/** Delete Restaurant type */
const deleteRestaurant_type = async (req, res) => {
    try {
        const restaurant_typeId = req.params.restaurant_typeId;

        const r_typeExists = await restaurant_typeService.getRestaurant_typeById(restaurant_typeId);
        if (!r_typeExists) {
            throw new Error("Restaurant_type not found!")
        }

        await restaurant_typeService.deleteRestaurant_type(restaurant_typeId);

        res.Restaurant_typeus(200).json({
            success: true,
            message: "Restaurant_type delete successfully!",
        });
    } catch (error) {
        res.Restaurant_typeus(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createRestaurant_type,
    getRestaurant_typeList,
    getRestaurant_typeDetails,
    updateDetails,
    deleteRestaurant_type
};