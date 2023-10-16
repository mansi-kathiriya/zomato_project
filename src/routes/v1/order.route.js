const express = require("express");
const { orderValidation } = require("../../validations");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Order */
router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderController.createOrder
);

/** Get Order list */
router.get(
    "/order-list",
    orderController.getOrderList
);

/** Get Order details by id */
router.get(
    "/order-details/:orderId",
    orderController.getOrderDetails,
);

/** Update Order */
router.put(
    "/update-details/:orderId",
    orderController.updateDetails,
);

/** Delete Order */
router.delete(
    "/order-delete/:orderId",
    orderController.deleteOrder,
);

module.exports = router;