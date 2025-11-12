const express = require('express');
const OrderCtrl = require('../controllers/order.controller');

const router = express.Router();

router.post('/', OrderCtrl.createOrder);
router.get('/:order_id', OrderCtrl.getOrderById);
router.get('/:order_id', OrderCtrl.updateOrderStatus);

module.exports = router;