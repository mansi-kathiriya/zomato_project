const express = require("express");
const userRoute = require("./user.route");
const countryRoute = require("./country.route");
const statRoute = require("./stat.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/country", countryRoute);
router.use("/stat", statRoute);

module.exports = router;