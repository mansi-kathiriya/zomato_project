const express = require("express");
const { senderValidation } = require("../../validations");
const { senderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Sender */
router.post(
    "/create-sender",
    validate(senderValidation.createSender),
    senderController.createSender
);

/** Get Sender list */
router.get(
    "/sender-list",
    senderController.getSenderList
);

/** Get Sender details by id */
router.get(
    "/sender-details/:senderId",
    senderController.getSenderDetails,
);

/** Update Sender */
router.put(
    "/update-details/:senderId",
    senderController.updateDetails,
);

/** Delete Sender */
router.delete(
    "/sender-delete/:senderId",
    senderController.deleteSender,
);

module.exports = router;