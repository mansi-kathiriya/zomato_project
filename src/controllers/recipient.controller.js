const { recipientService } = require("../services");

/** Create Recipient */
const createRecipient = async (req, res) => {
    try {
        const reqBody = req.body;

        const recipientExists = await recipientService.getRecipientByName(reqBody);
        if (recipientExists) {
            throw new Error("please add other Recipient this Recipient already created.");
        }

        const recipient = await recipientService.createRecipient(reqBody);

        res.status(200).json({
            success: true,
            message: "Recipient create successfully!",
            data: { recipient }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Recipient list */
const getRecipientList = async (req, res) => {
    try {
        const getList = await recipientService.getRecipientList();

        res.status(200).json({
            success: true,
            message: "Get Recipient list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Recipient details by id */
const getRecipientDetails = async (req, res) => {
    try {
        const getDetails = await recipientService.getRecipientById(
            req.params.recipientId
        )
        if (!getDetails) {
            throw new Error("Recipient not found!");
        }

        res.status(200).json({
            success: true,
            message: "Recipient details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Recipient */
const updateDetails = async (req, res) => {
    try {
        const recipientId = req.params.recipientId;

        const recipientExists = await recipientService.getRecipientById(recipientId);
        if (!recipientExists) {
            throw new Error("Recipient not found!")
        }

        await recipientService.updateDetails(recipientId, req.body);

        res.status(200).json({
            success: true,
            message: "Recipient details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Recipient */
const deleteRecipient = async (req, res) => {
    try {
        const recipientId = req.params.recipientId;

        const recipientExists = await recipientService.getRecipientById(recipientId);
        if (!recipientExists) {
            throw new Error("Recipient not found!")
        }

        await recipientService.deleteRecipient(recipientId);

        res.status(200).json({
            success: true,
            message: "Recipient delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createRecipient,
    getRecipientList,
    getRecipientDetails,
    updateDetails,
    deleteRecipient
};