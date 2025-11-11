const CartCtrl = require('../controllers/cart.controller');
const express = require('express');
const router = express.Router();

router.post('/create/:userId', CartCtrl.createCart);
router.post('/add-items/:cartId', CartCtrl.addItems);
router.get('/items/:userId', CartCtrl.getCartItems);
router.put('/update-item/:cartItemId', CartCtrl.updateCartItem);
router.delete('/delete-item/:cartItemId', CartCtrl.deleteCartItem);

module.exports = router;