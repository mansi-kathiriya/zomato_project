const express = require("express");
const { cityValidation } = require("../../validations");
const { cityController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create City */
router.post(
    "/create-city",
    validate(cityValidation.createCity),
    cityController.createCity
);

/** Get City list */
router.get(
    "/city-list",
    cityController.getCityList
);

/** Get City details by id */
router.get(
    "/city-details/:cityId",
    cityController.getCityDetails,
);

/** Update City */
router.put(
    "/update-details/:cityId",
    cityController.updateDetails,
);

/** Delete City */
router.delete(
    "/city-delete/:cityId",
    cityController.deleteCity,
);

module.exports = router;