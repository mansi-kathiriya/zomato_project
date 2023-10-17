const express = require("express");
const { driverValidation } = require("../../validations");
const { driverController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create driver */
router.post(
    "/create-driver",
    validate(driverValidation.createDriver),
    driverController.createDriver
);

/** Get driver list */
router.get(
    "/driver-list",
    driverController.getDriverList
);

/** Get driver details by id */
router.get(
    "/driver-details/:driverId",
    driverController.getDriverDetails,
);

/** Update driver */
router.put(
    "/update-details/:driverId",
    driverController.updateDetails,
);

/** Delete driver */
router.delete(
    "/driver-delete/:driverId",
    driverController.deleteDriver,
);

module.exports = router;