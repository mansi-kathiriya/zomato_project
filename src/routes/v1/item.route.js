const express = require("express");
const { itemValidation } = require("../../validations");
const { itemController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Item */
router.post(
    "/create-item",
    validate(itemValidation.createItem),
    itemController.createItem
);

/** Get Item list */
router.get(
    "/item-list",
    itemController.getItemList
);

/** Get Item details by id */
router.get(
    "/item-details/:itemId",
    itemController.getItemDetails,
);

/** Update Item */
router.put(
    "/update-details/:itemId",
    itemController.updateDetails,
);

/** Delete Item */
router.delete(
    "/item-delete/:itemId",
    itemController.deleteItem,
);

module.exports = router;