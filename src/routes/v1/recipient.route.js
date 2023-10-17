const express = require("express");
const { recipientValidation } = require("../../validations");
const { recipientController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Recipient */
router.post(
    "/create-recipient",
    validate(recipientValidation.createRecipient),
    recipientController.createRecipient
);

/** Get Recipient list */
router.get(
    "/recipient-list",
    recipientController.getRecipientList
);

/** Get Recipient details by id */
router.get(
    "/recipient-details/:recipientId",
    recipientController.getRecipientDetails,
);

/** Update Recipient */
router.put(
    "/update-details/:recipientId",
    recipientController.updateDetails,
);

/** Delete Recipient */
router.delete(
    "/recipient-delete/:recipientId",
    recipientController.deleteRecipient,
);

module.exports = router;