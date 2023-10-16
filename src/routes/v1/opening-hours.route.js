const express = require("express");
const { opening_hoursValidation } = require("../../validations");
const { opening_hoursController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Opening_hours */
router.post(
    "/create-opening_hours",
    validate(opening_hoursValidation.createOpening_hours),
    opening_hoursController.createOpening_hours
);

/** Get Opening_hours list */
router.get(
    "/opening_hours-list",
    opening_hoursController.getOpening_hoursList
);

/** Get Opening_hours details by id */
router.get(
    "/opening_hours-details/:opening_hoursId",
    opening_hoursController.getOpening_hoursDetails,
);

/** Update Opening_hours */
router.put(
    "/update-details/:opening_hoursId",
    opening_hoursController.updateDetails,
);

/** Delete Opening_hours */
router.delete(
    "/opening_hours-delete/:opening_hoursId",
    opening_hoursController.deleteOpening_hours,
);

module.exports = router;