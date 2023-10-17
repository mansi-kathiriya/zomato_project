const express = require("express");
const { deliveryValidation } = require("../../validations");
const { deliveryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create delivery */
router.post(
    "/create-delivery",
    validate(deliveryValidation.createDelivery),
    deliveryController.createDelivery
);

/** Get delivery list */
router.get(
    "/delivery-list",
    deliveryController.getDeliveryList
);

/** Get delivery details by id */
router.get(
    "/delivery-details/:deliveryId",
    deliveryController.getDeliveryDetails,
);

/** Update delivery */
router.put(
    "/update-details/:deliveryId",
    deliveryController.updateDetails,
);

/** Delete delivery */
router.delete(
    "/delivery-delete/:deliveryId",
    deliveryController.deleteDelivery,
);

module.exports = router;