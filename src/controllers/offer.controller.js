const { offerService } = require("../services");

/** Create Offer */
const createOffer = async (req, res) => {
    try {
        const reqBody = req.body;

        const offerExists = await offerService.getOfferByName(reqBody);
        if (offerExists) {
            throw new Error("please add other Offer this Offer already created.");
        }

        const offer = await offerService.createOffer(reqBody);

        res.status(200).json({
            success: true,
            message: "Offer create successfully!",
            data: { offer }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Offer list */
const getOfferList = async (req, res) => {
    try {
        const getList = await offerService.getOfferList();

        res.status(200).json({
            success: true,
            message: "Get Offer list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Offer details by id */
const getOfferDetails = async (req, res) => {
    try {
        const getDetails = await offerService.getOfferById(
            req.params.offerId
        )
        if (!getDetails) {
            throw new Error("Offer not found!");
        }

        res.status(200).json({
            success: true,
            message: "Offer details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Offer */
const updateDetails = async (req, res) => {
    try {
        const offerId = req.params.offerId;

        const offerExists = await offerService.getOfferById(offerId);
        if (!offerExists) {
            throw new Error("Offer not found!")
        }

        await offerService.updateDetails(offerId, req.body);

        res.status(200).json({
            success: true,
            message: "Offer details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Offer */
const deleteOffer = async (req, res) => {
    try {
        const offerId = req.params.offerId;

        const offerExists = await offerService.getOfferById(offerId);
        if (!offerExists) {
            throw new Error("Offer not found!")
        }

        await offerService.deleteOffer(offerId);

        res.status(200).json({
            success: true,
            message: "Offer delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createOffer,
    getOfferList,
    getOfferDetails,
    updateDetails,
    deleteOffer
};