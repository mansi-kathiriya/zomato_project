const { menuitemService } = require("../services");

/** Create Menuitem */
const createMenuitem = async (req, res) => {
    try {
        const reqBody = req.body;

        const menuitemExists = await menuitemService.getMenuitemByName(reqBody);
        if (menuitemExists) {
            throw new Error("please add other Menuitem this Menuitem already created.");
        }

        const item = await menuitemService.createMenuitem(reqBody);

        res.status(200).json({
            success: true,
            message: "Menuitem create successfully!",
            data: { item }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Menuitem list */
const getMenuitemList = async (req, res) => {
    try {
        const getList = await menuitemService.getMenuitemList();

        res.status(200).json({
            success: true,
            message: "Get Menuitem list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Menuitem details by id */
const getMenuitemDetails = async (req, res) => {
    try {
        const getDetails = await menuitemService.getMenuitemById(
            req.params.menuitemId
        )
        if (!getDetails) {
            throw new Error("Menuitem not found!");
        }

        res.status(200).json({
            success: true,
            message: "Menuitem details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Menuitem */
const updateDetails = async (req, res) => {
    try {
        const menuitemId = req.params.menuitemId;

        const menuitemExists = await menuitemService.getMenuitemById(menuitemId);
        if (!menuitemExists) {
            throw new Error("Menuitem not found!")
        }

        await menuitemService.updateDetails(menuitemId, req.body);

        res.status(200).json({
            success: true,
            message: "Menuitem details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Menuitem */
const deleteMenuitem = async (req, res) => {
    try {
        const menuitemId = req.params.menuitemId;

        const menuitemExists = await menuitemService.getMenuitemById(menuitemId);
        if (!menuitemExists) {
            throw new Error("Menuitem not found!")
        }

        await menuitemService.deleteMenuitem(menuitemId);

        res.status(200).json({
            success: true,
            message: "Menuitem delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createMenuitem,
    getMenuitemList,
    getMenuitemDetails,
    updateDetails,
    deleteMenuitem
};