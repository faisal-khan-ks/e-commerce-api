const CartService = require('../services/cart.service');

module.exports = {
    createCart: async (req, res) => {
        try {
            const result = await CartService.createCart(req.params.userId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    addItems: async (req, res) => {
        try {
            const result = await CartService.addItems(req.params.cartId,
                req.body.productId, req.body.quantity);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getCartItems: async (req, res) => {
        try {
            const result = await CartService.getCartItems(req.params.userId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateCartItem: async (req, res) => {
        try {
            const result = await CartService.updateCartItem(req.params.cartItemId, req.body.quantity);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteCartItem: async (req, res) => {
        try {
            const result = await CartService.deleteCartItem(req.params.cartItemId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}