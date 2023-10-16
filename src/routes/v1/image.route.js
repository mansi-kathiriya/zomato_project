const express = require("express");
const { upload } = require("../../middlewares/upload")
const { imageValidation } = require("../../validations");
const { imageController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Image */
router.post(
    "/create-image",
    upload.single("image"),
    validate(imageValidation.createImage),
    imageController.createImage
);

/** Get Image list */
router.get(
    "/image-list",
    imageController.getImageList
);

/** Get Image details by id */
router.get(
    "/image-details/:imageId",
    imageController.getImageDetails,
);

/** Update Image */
router.put(
    "/update-details/:imageId",
    imageController.updateDetails,
);

/** Delete Image */
router.delete(
    "/image-delete/:imageId",
    imageController.deleteImage,
);

module.exports = router;