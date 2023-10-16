const express = require("express");
const userRoute = require("./user.route");
const countryRoute = require("./country.route");
const statRoute = require("./stat.route");
const cityRoute = require("./city.route");
const restaurantRoute = require("./restaurant.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/country", countryRoute);
router.use("/stat", statRoute);
router.use("/city", cityRoute);
router.use("/restaurant", restaurantRoute);

module.exports = router;