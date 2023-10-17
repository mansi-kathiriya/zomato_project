const express = require("express");
const { offer_itemValidation } = require("../../validations");
const { offer_itemController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Offer_item */
router.post(
    "/create-offer_item",
    validate(offer_itemValidation.createOffer_item),
    offer_itemController.createOffer_item
);

/** Get Offer_item list */
router.get(
    "/offer_item-list",
    offer_itemController.getOffer_itemList
);

/** Get Offer_item details by id */
router.get(
    "/offer_item-details/:offerId",
    offer_itemController.getOffer_itemDetails,
);

/** Update Offer_item */
router.put(
    "/update-details/:offerId",
    offer_itemController.updateDetails,
);

/** Delete Offer_item */
router.delete(
    "/offer_item-delete/:offerId",
    offer_itemController.deleteOffer_item,
);

module.exports = router;