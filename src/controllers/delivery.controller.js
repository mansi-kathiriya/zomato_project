const { deliveryService } = require("../services");

/** Create Delivery */
const createDelivery = async (req, res) => {
    try {
        const reqBody = req.body;

        const deliveryExists = await deliveryService.getDeliveryByName(reqBody);
        if (deliveryExists) {
            throw new Error("please add other Delivery this Delivery already created.");
        }

        const delivery = await deliveryService.createDelivery(reqBody);

        res.status(200).json({
            success: true,
            message: "Delivery create successfully!",
            data: { delivery }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Delivery list */
const getDeliveryList = async (req, res) => {
    try {
        const getList = await deliveryService.getDeliveryList();

        res.status(200).json({
            success: true,
            message: "Get Delivery list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Delivery details by id */
const getDeliveryDetails = async (req, res) => {
    try {
        const getDetails = await deliveryService.getDeliveryById(
            req.params.deliveryId
        )
        if (!getDetails) {
            throw new Error("Delivery not found!");
        }

        res.status(200).json({
            success: true,
            message: "Delivery details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Delivery */
const updateDetails = async (req, res) => {
    try {
        const deliveryId = req.params.deliveryId;

        const deliveryExists = await deliveryService.getDeliveryById(deliveryId);
        if (!deliveryExists) {
            throw new Error("Delivery not found!")
        }

        await deliveryService.updateDetails(deliveryId, req.body);

        res.status(200).json({
            success: true,
            message: "Delivery details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Delivery */
const deleteDelivery = async (req, res) => {
    try {
        const deliveryId = req.params.deliveryId;

        const deliveryExists = await deliveryService.getDeliveryById(deliveryId);
        if (!deliveryExists) {
            throw new Error("Delivery not found!")
        }

        await deliveryService.deleteDelivery(deliveryId);

        res.status(200).json({
            success: true,
            message: "Delivery delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createDelivery,
    getDeliveryList,
    getDeliveryDetails,
    updateDetails,
    deleteDelivery
};