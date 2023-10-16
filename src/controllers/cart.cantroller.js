const { cartService } = require("../services");

/** Create Cart */
const createCart = async (req, res) => {
    try {
        const reqBody = req.body;

        const cartExists = await cartService.getCartByName(reqBody);
        if (cartExists) {
            throw new Error("please add other Cart this Cart already created.");
        }

        const stat = await cartService.createCart(reqBody);

        res.status(200).json({
            success: true,
            message: "Cart create successfully!",
            data: { stat }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Cart list */
const getCartList = async (req, res) => {
    try {
        const getList = await cartService.getCartList();

        res.status(200).json({
            success: true,
            message: "Get Cart list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Cart details by id */
const getCartDetails = async (req, res) => {
    try {
        const getDetails = await cartService.getCartById(
            req.params.cartId
        )
        if (!getDetails) {
            throw new Error("Cart not found!");
        }

        res.status(200).json({
            success: true,
            message: "Cart details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Cart */
const updateDetails = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        const cartExists = await cartService.getCartById(cartId);
        if (!cartExists) {
            throw new Error("Cart not found!")
        }

        await cartService.updateDetails(cartId, req.body);

        res.status(200).json({
            success: true,
            message: "Cart details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Cart */
const deleteCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        const cartExists = await cartService.getCartById(cartId);
        if (!cartExists) {
            throw new Error("Cart not found!")
        }

        await cartService.deleteCart(cartId);

        res.status(200).json({
            success: true,
            message: "Cart delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createCart,
    getCartList,
    getCartDetails,
    updateDetails,
    deleteCart
};