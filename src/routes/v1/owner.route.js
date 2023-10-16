const express = require("express");
const { ownerValidation } = require("../../validations");
const { ownerController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create owner */
router.post(
    "/create-owner",
    validate(ownerValidation.createOwner),
    ownerController.createOwner
);

/** Get owner list */
router.get(
    "/owner-list",
    ownerController.getOwnerList
);

/** Get owner details by id */
router.get(
    "/owner-details/:ownerId",
    ownerController.getOwnerDetails,
);

/** Update Owner */
router.put(
    "/update-details/:ownerId",
    ownerController.updateDetails,
);

/** Delete owner */
router.delete(
    "/owner-delete/:ownerId",
    ownerController.deleteOwner,
);

module.exports = router;