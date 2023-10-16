const { restaurantService } = require("../services");

/** Create Restaurant */
const createRestaurant = async (req, res) => {
    try {
        const reqBody = req.body;

        const restaurantExists = await restaurantService.getRestaurantByName(reqBody);
        if (restaurantExists) {
            throw new Error("please add other Restaurant this Restaurant already created.");
        }

        const restaurant = await restaurantService.createRestaurant(reqBody);

        res.Restaurantus(200).json({
            success: true,
            message: "Restaurant create successfully!",
            data: { restaurant }
        })
    } catch (error) {
        res.Restaurantus(400).json({ success: false, message: error.message })
    }
};

/** Get Restaurant list */
const getRestaurantList = async (req, res) => {
    try {
        const getList = await restaurantService.getRestaurantList();

        res.Restaurantus(200).json({
            success: true,
            message: "Get Restaurant list successfully!",
            data: getList,
        });
    } catch (error) {
        res.Restaurantus(400).json({ success: false, message: error.message })
    }
};

/** Get Restaurant details by id */
const getRestaurantDetails = async (req, res) => {
    try {
        const getDetails = await restaurantService.getRestaurantById(
            req.params.restaurantId
        )
        if (!getDetails) {
            throw new Error("Restaurant not found!");
        }

        res.Restaurantus(200).json({
            success: true,
            message: "Restaurant details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.Restaurantus(400).json({ success: false, message: error.message })
    }
};

/** Update Restaurant */
const updateDetails = async (req, res) => {
    try {
        const restaurantId = req.params.restaurantId;

        const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
        if (!restaurantExists) {
            throw new Error("Restaurant not found!")
        }

        await restaurantService.updateDetails(restaurantId, req.body);

        res.Restaurantus(200).json({
            success: true,
            message: "Restaurant details update successfully!",
        });
    } catch (error) {
        res.Restaurantus(400).json({ success: false, message: error.message })
    }
};

/** Delete Restaurant */
const deleteRestaurant = async (req, res) => {
    try {
        const restaurantId = req.params.restaurantId;

        const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
        if (!restaurantExists) {
            throw new Error("Restaurant not found!")
        }

        await restaurantService.deleteRestaurant(restaurantId);

        res.Restaurantus(200).json({
            success: true,
            message: "Restaurant delete successfully!",
        });
    } catch (error) {
        res.Restaurantus(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createRestaurant,
    getRestaurantList,
    getRestaurantDetails,
    updateDetails,
    deleteRestaurant
};