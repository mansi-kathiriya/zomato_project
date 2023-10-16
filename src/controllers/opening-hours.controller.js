const { opening_hoursService } = require("../services");

/** Create Opening hours */
const createOpening_hours = async (req, res) => {
    try {
        const reqBody = req.body;

        const opening_hours = await opening_hoursService.createOpening_hours(reqBody);

        res.status(200).json({
            success: true,
            message: "Opening_hours create successfully!",
            data: { opening_hours }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Opening hours list */
const getOpening_hoursList = async (req, res) => {
    try {
        const getList = await opening_hoursService.getOpening_hoursList();

        res.status(200).json({
            success: true,
            message: "Get Opening_hours list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Opening hours details by id */
const getOpening_hoursDetails = async (req, res) => {
    try {
        const getDetails = await opening_hoursService.getOpening_hoursById(
            req.params.opening_hoursId
        )
        if (!getDetails) {
            throw new Error("Opening_hours not found!");
        }

        res.status(200).json({
            success: true,
            message: "Opening_hours details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Opening hours */
const updateDetails = async (req, res) => {
    try {
        const opening_hoursId = req.params.opening_hoursId;

        const opening_hoursExists = await opening_hoursService.getOpening_hoursById(opening_hoursId);
        if (!opening_hoursExists) {
            throw new Error("Opening_hours not found!")
        }

        await opening_hoursService.updateDetails(opening_hoursId, req.body);

        res.status(200).json({
            success: true,
            message: "Opening_hours details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Opening hours */
const deleteOpening_hours = async (req, res) => {
    try {
        const opening_hoursId = req.params.opening_hoursId;

        const opening_hoursExists = await opening_hoursService.getOpening_hoursById(opening_hoursId);
        if (!opening_hoursExists) {
            throw new Error("Opening_hours not found!")
        }

        await opening_hoursService.deleteOpening_hours(opening_hoursId);

        res.status(200).json({
            success: true,
            message: "Opening_hours delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createOpening_hours,
    getOpening_hoursList,
    getOpening_hoursDetails,
    updateDetails,
    deleteOpening_hours
};