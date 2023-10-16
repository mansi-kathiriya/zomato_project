const express = require("express");
const { orderitemValidation } = require("../../validations");
const { orderitemController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Orderitem */
router.post(
    "/create-orderitem",
    validate(orderitemValidation.createOrderitem),
    orderitemController.createOrderitem
);

/** Get Orderitem list */
router.get(
    "/orderitem-list",
    orderitemController.getOrderitemList
);

/** Get Orderitem details by id */
router.get(
    "/orderitem-details/:orderitemId",
    orderitemController.getOrderitemDetails,
);

/** Update Orderitem */
router.put(
    "/update-details/:orderitemId",
    orderitemController.updateDetails,
);

/** Delete Orderitem */
router.delete(
    "/orderitem-delete/:orderitemId",
    orderitemController.deleteOrderitem,
);

module.exports = router;