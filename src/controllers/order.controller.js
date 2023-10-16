const { orderService } = require("../services");

/** Create Order */
const createOrder = async (req, res) => {
    try {
        const reqBody = req.body;

        const order = await orderService.createOrder(reqBody);
        if (order) {
            throw new Error("Order not found!");
        }

        res.status(200).json({
            success: true,
            message: "Order create successfully!",
            data: { order }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Order list */
const getOrderList = async (req, res) => {
    try {
        const getList = await orderService.getOrderList();

        res.status(200).json({
            success: true,
            message: "Get Order list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Order details by id */
const getOrderDetails = async (req, res) => {
    try {
        const getDetails = await orderService.getOrderById(
            req.params.orderId
        )
        if (!getDetails) {
            throw new Error("Order not found!");
        }

        res.status(200).json({
            success: true,
            message: "Order details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Order */
const updateDetails = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const orderExists = await orderService.getOrderById(orderId);
        if (!orderExists) {
            throw new Error("Order not found!")
        }

        await orderService.updateDetails(orderId, req.body);

        res.status(200).json({
            success: true,
            message: "Order details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Order */
const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const orderExists = await orderService.getOrderById(orderId);
        if (!orderExists) {
            throw new Error("Order not found!")
        }

        await orderService.deleteOrder(orderId);

        res.status(200).json({
            success: true,
            message: "Order delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createOrder,
    getOrderList,
    getOrderDetails,
    updateDetails,
    deleteOrder
};