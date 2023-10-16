const { orderitemService } = require("../services");

/** Create Orderitem */
const createOrderitem = async (req, res) => {
    try {
        const reqBody = req.body;

        const orderitemExists = await orderitemService.getOrderitemByName(reqBody);
        if (orderitemExists) {
            throw new Error("please add other Orderitem this Orderitem already created.");
        }

        const orderitem = await orderitemService.createOrderitem(reqBody);

        res.status(200).json({
            success: true,
            message: "Orderitem create successfully!",
            data: { orderitem }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Orderitem list */
const getOrderitemList = async (req, res) => {
    try {
        const getList = await orderitemService.getOrderitemList();

        res.status(200).json({
            success: true,
            message: "Get Orderitem list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Orderitem details by id */
const getOrderitemDetails = async (req, res) => {
    try {
        const getDetails = await orderitemService.getOrderitemById(
            req.params.orderitemId
        )
        if (!getDetails) {
            throw new Error("Orderitem not found!");
        }

        res.status(200).json({
            success: true,
            message: "Orderitem details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Orderitem */
const updateDetails = async (req, res) => {
    try {
        const orderitemId = req.params.orderitemId;

        const orderitemExists = await orderitemService.getOrderitemById(orderitemId);
        if (!orderitemExists) {
            throw new Error("Orderitem not found!")
        }

        await orderitemService.updateDetails(orderitemId, req.body);

        res.status(200).json({
            success: true,
            message: "Orderitem details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Orderitem */
const deleteOrderitem = async (req, res) => {
    try {
        const orderitemId = req.params.orderitemId;

        const orderitemExists = await orderitemService.getOrderitemById(orderitemId);
        if (!orderitemExists) {
            throw new Error("Orderitem not found!")
        }

        await orderitemService.deleteOrderitem(orderitemId);

        res.status(200).json({
            success: true,
            message: "Orderitem delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createOrderitem,
    getOrderitemList,
    getOrderitemDetails,
    updateDetails,
    deleteOrderitem
};