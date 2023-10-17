const { offer_itemService } = require("../services");

/** Create Offer item */
const createOffer_item = async (req, res) => {
    try {
        const reqBody = req.body;

        const offeritemExists = await offer_itemService.getOffer_itemByName(reqBody);
        if (offeritemExists) {
            throw new Error("please add other Offeritem this Offer item already created.");
        }

        const offeritem = await offer_itemService.createOffer_item(reqBody);

        res.status(200).json({
            success: true,
            message: "Offer item create successfully!",
            data: { offeritem }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Offer_item list */
const getOffer_itemList = async (req, res) => {
    try {
        const getList = await offer_itemService.getOffer_itemList();

        res.status(200).json({
            success: true,
            message: "Get Offer item list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Offer_item details by id */
const getOffer_itemDetails = async (req, res) => {
    try {
        const getDetails = await offer_itemService.getOffer_itemById(
            req.params.offer_itemId
        )
        if (!getDetails) {
            throw new Error("Offer item not found!");
        }

        res.status(200).json({
            success: true,
            message: "Offer item details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Offer_item */
const updateDetails = async (req, res) => {
    try {
        const offer_itemId = req.params.offer_itemId;

        const offerExists = await offer_itemService.getOffer_itemById(offer_itemId);
        if (!offerExists) {
            throw new Error("Offer item not found!")
        }

        await offer_itemService.updateDetails(offer_itemId, req.body);

        res.status(200).json({
            success: true,
            message: "Offer item details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Offer_item */
const deleteOffer_item = async (req, res) => {
    try {
        const offer_itemId = req.params.offer_itemId;

        const offerExists = await offer_itemService.getOffer_itemById(offer_itemId);
        if (!offerExists) {
            throw new Error("Offer item not found!")
        }

        await offer_itemService.deleteOffer_item(offer_itemId);

        res.status(200).json({
            success: true,
            message: "Offer item delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createOffer_item,
    getOffer_itemList,
    getOffer_itemDetails,
    updateDetails,
    deleteOffer_item
};