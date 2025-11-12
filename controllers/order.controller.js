const OrderService = require("../services/order.service");

module.exports = {
    createOrder: async (req, res) => {
        try {
            const result = await OrderService.createOrder(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    getOrderById: async (req, res) => {
        try {
            const result = await OrderService.getOrderById(req.params.order_id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    updateOrderStatus: async (req, res) => {
        try {
            const result = await OrderService.updateOrderStatus(req.params.order_id, req.body.status);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}