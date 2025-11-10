const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/', productController.getAllProducts);

router.post('/', productController.addProduct);

router.patch('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;