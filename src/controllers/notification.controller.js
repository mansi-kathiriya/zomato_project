const { notificationService } = require("../services");

/** Create Notification */
const createNotification = async (req, res) => {
    try {
        const reqBody = req.body;

        const notificationExists = await notificationService.getNotificationByName(reqBody);
        if (notificationExists) {
            throw new Error("please add other Notification this Notification already created.");
        }

        const notification = await notificationService.createNotification(reqBody);

        res.status(200).json({
            success: true,
            message: "Notification create successfully!",
            data: { notification }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Notification list */
const getNotificationList = async (req, res) => {
    try {
        const getList = await notificationService.getNotificationList();

        res.status(200).json({
            success: true,
            message: "Get Notification list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Notification details by id */
const getNotificationDetails = async (req, res) => {
    try {
        const getDetails = await notificationService.getNotificationById(
            req.params.notificationId
        )
        if (!getDetails) {
            throw new Error("Notification not found!");
        }

        res.status(200).json({
            success: true,
            message: "Notification details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Notification */
const updateDetails = async (req, res) => {
    try {
        const notificationId = req.params.notificationId;

        const notificationExists = await notificationService.getNotificationById(notificationId);
        if (!notificationExists) {
            throw new Error("Notification not found!")
        }

        await notificationService.updateDetails(notificationId, req.body);

        res.status(200).json({
            success: true,
            message: "Notification details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Notification */
const deleteNotification = async (req, res) => {
    try {
        const notificationId = req.params.notificationId;

        const notificationExists = await notificationService.getNotificationById(notificationId);
        if (!notificationExists) {
            throw new Error("Notification not found!")
        }

        await notificationService.deleteNotification(notificationId);

        res.status(200).json({
            success: true,
            message: "Notification delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createNotification,
    getNotificationList,
    getNotificationDetails,
    updateDetails,
    deleteNotification
};