const express = require("express");
const { restaurantValidation } = require("../../validations");
const { restaurantController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Restaurant */
router.post(
    "/create-restaurant",
    validate(restaurantValidation.createRestaurant),
    restaurantController.createRestaurant
);

/** Get Restaurant list */
router.get(
    "/restaurant-list",
    restaurantController.getRestaurantList
);

/** Get Restaurant details by id */
router.get(
    "/restaurant-details/:restaurantId",
    restaurantController.getRestaurantDetails,
);

/** Update Restaurant */
router.put(
    "/update-details/:restaurantId",
    restaurantController.updateDetails,
);

/** Delete Restaurant */
router.delete(
    "/restaurant-delete/:restaurantId",
    restaurantController.deleteRestaurant,
);

module.exports = router;