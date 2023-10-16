const { imageService } = require("../services");

/** Create Image */
const createImage = async (req, res) => {
    try {
        const reqBody = req.body;

        const statExists = await imageService.getImageByName(reqBody);
        if (statExists) {
            throw new Error("please add other Image this Image already created.");
        }

        const image = await imageService.createImage(reqBody);

        res.status(200).json({
            success: true,
            message: "Image create successfully!",
            data: { image }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Image list */
const getImageList = async (req, res) => {
    try {
        const getList = await imageService.getImageList();

        res.status(200).json({
            success: true,
            message: "Get Image list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Image details by id */
const getImageDetails = async (req, res) => {
    try {
        const getDetails = await imageService.getImageById(
            req.params.imageId
        )
        if (!getDetails) {
            throw new Error("Image not found!");
        }

        res.status(200).json({
            success: true,
            message: "Image details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Image */
const updateDetails = async (req, res) => {
    try {
        const imageId = req.params.imageId;

        const statExists = await imageService.getImageById(imageId);
        if (!statExists) {
            throw new Error("Image not found!")
        }

        await imageService.updateDetails(imageId, req.body);

        res.status(200).json({
            success: true,
            message: "Image details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Image */
const deleteImage = async (req, res) => {
    try {
        const imageId = req.params.imageId;

        const statExists = await imageService.getImageById(imageId);
        if (!statExists) {
            throw new Error("Image not found!")
        }

        await imageService.deleteImage(imageId);

        res.status(200).json({
            success: true,
            message: "Image delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createImage,
    getImageList,
    getImageDetails,
    updateDetails,
    deleteImage
};