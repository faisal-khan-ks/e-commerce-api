const productService = require('../services/product.service');

// Controller to get all products
module.exports = {
    getAllProducts: async (req, res) => {
        try {
            const products = await productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    addProduct: async (req, res) => {
        try {
            const productData = req.body;
            const newProduct = await productService.addProduct(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const result = await productService.updateProduct(req.params.id, req.body);
            res.status(200).json({ message: 'Product updated successfully', result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const result = await productService.deleteProduct(req.params.id);
            res.status(200).json({ message: 'Product deleted successfully', result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

