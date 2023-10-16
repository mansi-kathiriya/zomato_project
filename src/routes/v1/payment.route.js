const express = require("express");
const { paymentValidation } = require("../../validations");
const { paymentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create Payment */
router.post(
  "/create-payment",
  validate(paymentValidation.createPayment),
  paymentController.createPayment
);

/** Get Payment list */
router.get(
  "/payment-list",
  paymentController.getPaymentList
);

/** get Payment details by id */
router.get(
  "/get-details/:paymentId",
  paymentController.getPaymentDetails
)

/** update Payment */
router.put(
  "/update-payment/:paymentId",
  paymentController.updateDetails
)

/** delete Payment */
router.delete(
  "/delete-payment/:paymentId",
  paymentController.deletePayment
)

module.exports = router;