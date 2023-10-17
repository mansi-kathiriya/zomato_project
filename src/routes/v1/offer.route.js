const express = require("express");
const { offerValidation } = require("../../validations");
const { offerController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Offer */
router.post(
    "/create-offer",
    validate(offerValidation.createOffer),
    offerController.createOffer
);

/** Get Offer list */
router.get(
    "/offer-list",
    offerController.getOfferList
);

/** Get Offer details by id */
router.get(
    "/offer-details/:offerId",
    offerController.getOfferDetails,
);

/** Update Offer */
router.put(
    "/update-details/:offerId",
    offerController.updateDetails,
);

/** Delete Offer */
router.delete(
    "/offer-delete/:offerId",
    offerController.deleteOffer,
);

module.exports = router;