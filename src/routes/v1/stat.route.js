const express = require("express");
const { statValidation } = require("../../validations");
const { statController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Stat */
router.post(
    "/create-stat",
    validate(statValidation.createStat),
    statController.createStat
);

/** Get Stat list */
router.get(
    "/stat-list",
    statController.getStatList
);

/** Get Stat details by id */
router.get(
    "/stat-details/:statId",
    statController.getStatDetails,
);

/** Update Stat */
router.put(
    "/update-details/:statId",
    statController.updateDetails,
);

/** Delete Stat */
router.delete(
    "/stat-delete/:statId",
    statController.deleteStat,
);

module.exports = router;