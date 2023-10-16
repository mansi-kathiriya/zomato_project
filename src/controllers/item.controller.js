const { itemService } = require("../services");

/** Create Item */
const createItem = async (req, res) => {
    try {
        const reqBody = req.body;

        const itemExists = await itemService.getItemByName(reqBody);
        if (itemExists) {
            throw new Error("please add other Item this Item already created.");
        }

        const item = await itemService.createItem(reqBody);

        res.status(200).json({
            success: true,
            message: "Item create successfully!",
            data: { item }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Item list */
const getItemList = async (req, res) => {
    try {
        const getList = await itemService.getItemList();

        res.status(200).json({
            success: true,
            message: "Get Item list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Item details by id */
const getItemDetails = async (req, res) => {
    try {
        const getDetails = await itemService.getItemById(
            req.params.itemId
        )
        if (!getDetails) {
            throw new Error("Item not found!");
        }

        res.status(200).json({
            success: true,
            message: "Item details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Item */
const updateDetails = async (req, res) => {
    try {
        const itemId = req.params.itemId;

        const itemExists = await itemService.getItemById(itemId);
        if (!itemExists) {
            throw new Error("Item not found!")
        }

        await itemService.updateDetails(itemId, req.body);

        res.status(200).json({
            success: true,
            message: "Item details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Item */
const deleteItem = async (req, res) => {
    try {
        const itemId = req.params.itemId;

        const itemExists = await itemService.getItemById(itemId);
        if (!itemExists) {
            throw new Error("Item not found!")
        }

        await itemService.deleteItem(itemId);

        res.status(200).json({
            success: true,
            message: "Item delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createItem,
    getItemList,
    getItemDetails,
    updateDetails,
    deleteItem
};