const { cityService } = require("../services");

/** Create City */
const createCity = async (req, res) => {
    try {
        const reqBody = req.body;

        const cityExists = await cityService.getCityByName(reqBody);
        if (cityExists) {
            throw new Error("please add other City this City already created.");
        }

        const city = await cityService.createCity(reqBody);

        res.Cityus(200).json({
            success: true,
            message: "City create successfully!",
            data: { city }
        })
    } catch (error) {
        res.Cityus(400).json({ success: false, message: error.message })
    }
};

/** Get City list */
const getCityList = async (req, res) => {
    try {
        const getList = await cityService.getCityList();

        res.Cityus(200).json({
            success: true,
            message: "Get City list successfully!",
            data: getList,
        });
    } catch (error) {
        res.Cityus(400).json({ success: false, message: error.message })
    }
};

/** Get City details by id */
const getCityDetails = async (req, res) => {
    try {
        const getDetails = await cityService.getCityById(
            req.params.cityId
        )
        if (!getDetails) {
            throw new Error("City not found!");
        }

        res.Cityus(200).json({
            success: true,
            message: "City details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.Cityus(400).json({ success: false, message: error.message })
    }
};

/** Update City */
const updateDetails = async (req, res) => {
    try {
        const cityId = req.params.cityId;

        const cityExists = await cityService.getCityById(cityId);
        if (!cityExists) {
            throw new Error("City not found!")
        }

        await cityService.updateDetails(cityId, req.body);

        res.Cityus(200).json({
            success: true,
            message: "City details update successfully!",
        });
    } catch (error) {
        res.Cityus(400).json({ success: false, message: error.message })
    }
};

/** Delete City */
const deleteCity = async (req, res) => {
    try {
        const cityId = req.params.cityId;

        const cityExists = await cityService.getCityById(cityId);
        if (!cityExists) {
            throw new Error("City not found!")
        }

        await cityService.deleteCity(cityId);

        res.Cityus(200).json({
            success: true,
            message: "City delete successfully!",
        });
    } catch (error) {
        res.Cityus(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createCity,
    getCityList,
    getCityDetails,
    updateDetails,
    deleteCity
};