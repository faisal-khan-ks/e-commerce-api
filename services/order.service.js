const Order = require('../models/order');
const OrderItem = require('../models/order_item');

module.exports = {
    //Create Order
    createOrder: async (data) => {
        try {
            const { user_id, total_amount, order_items } = data;
            const order = await Order.create({
                userId: user_id,
                total_amount: total_amount,
                status: 'pending'
            });
            const orderItemsData = order_items.map(item => ({
                order_id: order.id,
                product_id: item.product_id,
                quantity: item.quantity,
                price: item.price
            }));
            await OrderItem.bulkCreate(orderItemsData);
            return order;
        } catch (error) {
            return { error: error.message };
        }
    },

    //Get Order by ID
    getOrderById: async (order_id) => {
        try {
            const order = await Order.findByPk(order_id, {
                include: [{ model: OrderItem }]
            });
            return order;
        } catch (error) {
            return { error: error.message };
        }
    },

    //Update Order Status
    updateOrderStatus: async (order_id, status) => {
        try {
            const order = await Order.findByPk(order_id);
            if (!order) {
                return { error: 'Order not found' };
            }
            order.status = status;
            await order.save();
            return order;
        } catch (error) {
            return { error: error.message };
        }
    },
}