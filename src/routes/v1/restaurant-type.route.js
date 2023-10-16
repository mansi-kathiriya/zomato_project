const express = require("express");
const { restaurant_typeValidation } = require("../../validations");
const { restaurant_typeController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Restaurant type */
router.post(
    "/create-restaurant_type",
    validate(restaurant_typeValidation.createRestaurant_type),
    restaurant_typeController.createRestaurant_type
);

/** Get Restaurant type list */
router.get(
    "/restaurant_type-list",
    restaurant_typeController.getRestaurant_typeList
);

/** Get Restaurant type details by id */
router.get(
    "/restaurant_type-details/:restaurant_typeId",
    restaurant_typeController.getRestaurant_typeDetails,
);

/** Update Restaurant type */
router.put(
    "/update-details/:restaurant_typeId",
    restaurant_typeController.updateDetails,
);

/** Delete Restaurant type */
router.delete(
    "/restaurant_type-delete/:restaurant_typeId",
    restaurant_typeController.deleteRestaurant_type,
);

module.exports = router;