const { ownerService } = require("../services");

/** Create Owner */
const createOwner = async (req, res) => {
    try {
        const reqBody = req.body;

        const ownerExists = await ownerService.getOwnerByEmail(reqBody.email);
        if (ownerExists) {
          throw new Error("User already craeted by this email!");
        }

        const owner = await ownerService.createOwner(reqBody);

        res.status(200).json({
            success: true,
            message: "Owner create successfully!",
            data: { owner }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Owner list */
const getOwnerList = async (req, res) => {
    try {
        const getList = await ownerService.getOwnerList();

        res.status(200).json({
            success: true,
            message: "Get Owner list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Owner details by id */
const getOwnerDetails = async (req, res) => {
    try {
        const getDetails = await ownerService.getOwnerById(
            req.params.ownerId
        )
        if (!getDetails) {
            throw new Error("Owner not found!");
        }

        res.status(200).json({
            success: true,
            message: "Owner details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Owner */
const updateDetails = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;

        const ownerExists = await ownerService.getOwnerById(ownerId);
        if (!ownerExists) {
            throw new Error("Owner not found!")
        }

        await ownerService.updateDetails(ownerId, req.body);

        res.status(200).json({
            success: true,
            message: "Owner details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Owner */
const deleteOwner = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;

        const ownerExists = await ownerService.getOwnerById(ownerId);
        if (!ownerExists) {
            throw new Error("Owner not found!")
        }

        await ownerService.deleteOwner(ownerId);

        res.status(200).json({
            success: true,
            message: "Owner delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createOwner,
    getOwnerList,
    getOwnerDetails,
    updateDetails,
    deleteOwner
};