const Product = require('../models/product');

// Service to get all products
module.exports = {
    getAllProducts: async () => {
        try {
            const products = await Product.findAll({
                attributes: ['id', 'name', 'price', 'description', 'stock']
            });
            return products;
        }
        catch (error) {
            console.log(error)
            throw new Error('Error fetching products: ' + error.message);
        }
    },

    addProduct: async (productData) => {
        try {
            const newProduct = await Product.create(productData);
            return newProduct;
        } catch (error) {
            throw new Error('Error adding product: ' + error.message);
        }
    },

    updateProduct: async (id, updateData) => {
        try {
            const result = await Product.update(updateData, {
                where: { id: id }
            });
            return result;
        } catch (error) {
            throw new Error('Error updating product: ' + error.message);
        }
    },

    deleteProduct: async (id) => {
        try {
            const result = await Product.destroy({
                where: { id: id }
            });
            return result;
        } catch (error) {
            throw new Error('Error deleting product: ' + error.message);
        }
    },
}