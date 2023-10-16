const express = require("express");
const userRoute = require("./user.route");
const ownerRoute = require("./owner.route");
const countryRoute = require("./country.route");
const statRoute = require("./stat.route");
const cityRoute = require("./city.route");
const restaurantRoute = require("./restaurant.route");
const restaurant_typeRoute = require("./restaurant-type.route");
const opening_hoursRoute = require("./opening-hours.route");
const imageRoute = require("./image.route");
const categoryRoute = require("./category.route");
const itemRoute = require("./item.route");
const orderRoute = require("./order.route");
const orderitemRoute = require("./orderitem.route");
const cartRoute = require("./cart.route");
const paymentRoute = require("./payment.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/owner", ownerRoute);
router.use("/country", countryRoute);
router.use("/stat", statRoute);
router.use("/city", cityRoute);
router.use("/restaurant", restaurantRoute);
router.use("/restaurant-type", restaurant_typeRoute);
router.use("/opening-hours", opening_hoursRoute);
router.use("/image", imageRoute);
router.use("/category", categoryRoute);
router.use("/item", itemRoute);
router.use("/order", orderRoute);
router.use("/orderitem", orderitemRoute);
router.use("/cart", cartRoute);
router.use("/payment", paymentRoute);

module.exports = router;