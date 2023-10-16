const { categoryService } = require("../services");

/** Create Category */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const categoryExists = await categoryService.getCategoryByName(reqBody);
        if (categoryExists) {
            throw new Error("please add other Category this Category already created.");
        }

        const category = await categoryService.createCategory(reqBody);

        res.status(200).json({
            success: true,
            message: "Category create successfully!",
            data: { category }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Category list */
const getCategoryList = async (req, res) => {
    try {
        const getList = await categoryService.getCategoryList();

        res.status(200).json({
            success: true,
            message: "Get Category list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Category details by id */
const getCategoryDetails = async (req, res) => {
    try {
        const getDetails = await categoryService.getCategoryById(
            req.params.categoryId
        )
        if (!getDetails) {
            throw new Error("Category not found!");
        }

        res.status(200).json({
            success: true,
            message: "Category details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Category */
const updateDetails = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const categoryExists = await categoryService.getCategoryById(categoryId);
        if (!categoryExists) {
            throw new Error("Category not found!")
        }

        await categoryService.updateDetails(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "Category details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Category */
const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const categoryExists = await categoryService.getCategoryById(categoryId);
        if (!categoryExists) {
            throw new Error("Category not found!")
        }

        await categoryService.deleteCategory(categoryId);

        res.status(200).json({
            success: true,
            message: "Category delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryDetails,
    updateDetails,
    deleteCategory
};