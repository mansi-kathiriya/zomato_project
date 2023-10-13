const express = require("express");
const userRoute = require("./user.route");
const countryRoute = require("./country.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/country", countryRoute);

module.exports = router;