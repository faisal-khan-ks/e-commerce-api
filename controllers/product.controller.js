const productService = require('../services/product.service');

// Controller to get all products
module.exports = {
    getAllProducts: (req, res) => {
        try {
            const products = productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

