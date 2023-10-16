const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Category */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

/** Get Category list */
router.get(
    "/category-list",
    categoryController.getCategoryList
);

/** Get Category details by id */
router.get(
    "/category-details/:categoryId",
    categoryController.getCategoryDetails,
);

/** Update Category */
router.put(
    "/update-details/:categoryId",
    categoryController.updateDetails,
);

/** Delete Category */
router.delete(
    "/category-delete/:categoryId",
    categoryController.deleteCategory,
);

module.exports = router;