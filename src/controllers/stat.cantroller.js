const { statService } = require("../services");

/** Create Stat */
const createStat = async (req, res) => {
    try {
        const reqBody = req.body;

        const statExists = await statService.getStatByName(reqBody);
        if (statExists) {
            throw new Error("please add other Stat this Stat already created.");
        }

        const stat = await statService.createStat(reqBody);

        res.status(200).json({
            success: true,
            message: "Stat create successfully!",
            data: { stat }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Stat list */
const getStatList = async (req, res) => {
    try {
        const getList = await statService.getStatList();

        res.status(200).json({
            success: true,
            message: "Get Stat list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Stat details by id */
const getStatDetails = async (req, res) => {
    try {
        const getDetails = await statService.getStatById(
            req.params.statId
        )
        if (!getDetails) {
            throw new Error("Stat not found!");
        }

        res.status(200).json({
            success: true,
            message: "Stat details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Stat */
const updateDetails = async (req, res) => {
    try {
        const statId = req.params.statId;

        const statExists = await statService.getStatById(statId);
        if (!statExists) {
            throw new Error("Stat not found!")
        }

        await statService.updateDetails(statId, req.body);

        res.status(200).json({
            success: true,
            message: "Stat details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Stat */
const deleteStat = async (req, res) => {
    try {
        const statId = req.params.statId;

        const statExists = await statService.getStatById(statId);
        if (!statExists) {
            throw new Error("Stat not found!")
        }

        await statService.deleteStat(statId);

        res.status(200).json({
            success: true,
            message: "Stat delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createStat,
    getStatList,
    getStatDetails,
    updateDetails,
    deleteStat
};