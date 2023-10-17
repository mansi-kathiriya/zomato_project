const { senderService } = require("../services");

/** Create Sender */
const createSender = async (req, res) => {
    try {
        const reqBody = req.body;

        const senderExists = await senderService.getSenderByName(reqBody);
        if (senderExists) {
            throw new Error("please add other Sender this Sender already created.");
        }

        const sender = await senderService.createSender(reqBody);

        res.status(200).json({
            success: true,
            message: "Sender create successfully!",
            data: { sender }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Sender list */
const getSenderList = async (req, res) => {
    try {
        const getList = await senderService.getSenderList();

        res.status(200).json({
            success: true,
            message: "Get Sender list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Sender details by id */
const getSenderDetails = async (req, res) => {
    try {
        const getDetails = await senderService.getSenderById(
            req.params.senderId
        )
        if (!getDetails) {
            throw new Error("Sender not found!");
        }

        res.status(200).json({
            success: true,
            message: "Sender details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Sender */
const updateDetails = async (req, res) => {
    try {
        const senderId = req.params.senderId;

        const senderExists = await senderService.getSenderById(senderId);
        if (!senderExists) {
            throw new Error("Sender not found!")
        }

        await senderService.updateDetails(senderId, req.body);

        res.status(200).json({
            success: true,
            message: "Sender details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Sender */
const deleteSender = async (req, res) => {
    try {
        const senderId = req.params.senderId;

        const senderExists = await senderService.getSenderById(senderId);
        if (!senderExists) {
            throw new Error("Sender not found!")
        }

        await senderService.deleteSender(senderId);

        res.status(200).json({
            success: true,
            message: "Sender delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createSender,
    getSenderList,
    getSenderDetails,
    updateDetails,
    deleteSender
};