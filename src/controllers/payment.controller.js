const { paymentService } = require("../services");

/** Create Payment */
const createPayment = async (req, res) => {
    try {
        const reqBody = req.body;

        const paymentExists = await paymentService.getPaymentByName(reqBody);
        if (paymentExists) {
            throw new Error("please add other Payment this Payment already created.");
        }

        const payment = await paymentService.createPayment(reqBody);

        res.status(200).json({
            success: true,
            message: "Payment create successfully!",
            data: { payment }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Payment list */
const getPaymentList = async (req, res) => {
    try {
        const getList = await paymentService.getPaymentList();

        res.status(200).json({
            success: true,
            message: "Get Payment list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Payment details by id */
const getPaymentDetails = async (req, res) => {
    try {
        const getDetails = await paymentService.getPaymentById(
            req.params.paymentId
        )
        if (!getDetails) {
            throw new Error("Payment not found!");
        }

        res.status(200).json({
            success: true,
            message: "Payment details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Payment */
const updateDetails = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;

        const paymentExists = await paymentService.getPaymentById(paymentId);
        if (!paymentExists) {
            throw new Error("Payment not found!")
        }

        await paymentService.updateDetails(paymentId, req.body);

        res.status(200).json({
            success: true,
            message: "Payment details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Payment */
const deletePayment = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;

        const paymentExists = await paymentService.getPaymentById(paymentId);
        if (!paymentExists) {
            throw new Error("Payment not found!")
        }

        await paymentService.deletePayment(paymentId);

        res.status(200).json({
            success: true,
            message: "Payment delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createPayment,
    getPaymentList,
    getPaymentDetails,
    updateDetails,
    deletePayment
};