const express = require("express");
const { notificationValidation } = require("../../validations");
const { notificationController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Notification */
router.post(
    "/create-notification",
    validate(notificationValidation.createNotification),
    notificationController.createNotification
);

/** Get Notification list */
router.get(
    "/notification-list",
    notificationController.getNotificationList
);

/** Get Notification details by id */
router.get(
    "/notification-details/:offerId",
    notificationController.getNotificationDetails,
);

/** Update Notification */
router.put(
    "/update-details/:offerId",
    notificationController.updateDetails,
);

/** Delete Notification */
router.delete(
    "/notification-delete/:offerId",
    notificationController.deleteNotification,
);

module.exports = router;