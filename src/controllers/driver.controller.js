const { driverService } = require("../services");

/** Create Driver */
const createDriver = async (req, res) => {
    try {
        const reqBody = req.body;

        const driverExists = await driverService.getDriverByName(reqBody);
        if (driverExists) {
            throw new Error("please add other Driver this Driver already created.");
        }

        const driver = await driverService.createDriver(reqBody);

        res.status(200).json({
            success: true,
            message: "Driver create successfully!",
            data: { driver }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Driver list */
const getDriverList = async (req, res) => {
    try {
        const getList = await driverService.getDriverList();

        res.status(200).json({
            success: true,
            message: "Get Driver list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Driver details by id */
const getDriverDetails = async (req, res) => {
    try {
        const getDetails = await driverService.getDriverById(
            req.params.driverId
        )
        if (!getDetails) {
            throw new Error("Driver not found!");
        }

        res.status(200).json({
            success: true,
            message: "Driver details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Driver */
const updateDetails = async (req, res) => {
    try {
        const driverId = req.params.driverId;

        const driverExists = await driverService.getDriverById(driverId);
        if (!driverExists) {
            throw new Error("Driver not found!")
        }

        await driverService.updateDetails(driverId, req.body);

        res.status(200).json({
            success: true,
            message: "Driver details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Driver */
const deleteDriver = async (req, res) => {
    try {
        const driverId = req.params.driverId;

        const driverExists = await driverService.getDriverById(driverId);
        if (!driverExists) {
            throw new Error("Driver not found!")
        }

        await driverService.deleteDriver(driverId);

        res.status(200).json({
            success: true,
            message: "Driver delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createDriver,
    getDriverList,
    getDriverDetails,
    updateDetails,
    deleteDriver
};