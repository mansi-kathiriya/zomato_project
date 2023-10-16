const express = require("express");
const { cartValidation } = require("../../validations");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Cart */
router.post(
    "/create-cart",
    validate(cartValidation.createCart),
    cartController.createCart
);

/** Get Cart list */
router.get(
    "/cart-list",
    cartController.getCartList
);

/** Get Cart details by id */
router.get(
    "/cart-details/:cartId",
    cartController.getCartDetails,
);

/** Update Cart */
router.put(
    "/update-details/:cartId",
    cartController.updateDetails,
);

/** Delete Cart */
router.delete(
    "/cart-delete/:cartId",
    cartController.deleteCart,
);

module.exports = router;