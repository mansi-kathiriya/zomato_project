const { countryService } = require("../services");

/** Create Country */
const createCountry = async (req, res) => {
    try {
        const reqBody = req.body;

        const countryExists = await countryService.getCountryByName(reqBody);
        if (countryExists) {
            throw new Error("please add other Country this Country already created.");
        }

        const country = await countryService.createCountry(reqBody);

        res.status(200).json({
            success: true,
            message: "Country create successfully!",
            data: { country }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Country list */
const getCountryList = async (req, res) => {
    try {
        const getList = await countryService.getCountryList();

        res.status(200).json({
            success: true,
            message: "Get Country list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Country details by id */
const getCountryDetails = async (req, res) => {
    try {
        const getDetails = await countryService.getCountryById(
            req.params.countryId
        )
        if (!getDetails) {
            throw new Error("Country not found!");
        }

        res.status(200).json({
            success: true,
            message: "Country details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Country */
const updateDetails = async (req, res) => {
    try {
        const countryId = req.params.countryId;

        const countryExists = await countryService.getCountryById(countryId);
        if (!countryExists) {
            throw new Error("Country not found!")
        }

        await countryService.updateDetails(countryId, req.body);

        res.status(200).json({
            success: true,
            message: "Country details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Country */
const deleteCountry = async (req, res) => {
    try {
        const countryId = req.params.countryId;

        const countryExists = await countryService.getCountryById(countryId);
        if (!countryExists) {
            throw new Error("Country not found!")
        }

        await countryService.deleteCountry(countryId);

        res.status(200).json({
            success: true,
            message: "Country delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createCountry,
    getCountryList,
    getCountryDetails,
    updateDetails,
    deleteCountry
};