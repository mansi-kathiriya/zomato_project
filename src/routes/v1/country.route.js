const express = require("express");
const { countryValidation } = require("../../validations");
const { countryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create country */
router.post(
    "/create-country",
    validate(countryValidation.createCountry),
    countryController.createCountry
);

/** Get country list */
router.get(
    "/country-list",
    countryController.getCountryList
);

/** Get country details by id */
router.get(
    "/country-details/:countryId",
    countryController.getCountryDetails,
);

/** Update country */
router.put(
    "/update-details/:countryId",
    countryController.updateDetails,
);

/** Delete country */
router.delete(
    "/country-delete/:countryId",
    countryController.deleteCountry,
);

module.exports = router;