const Product = require('../models/product');

// Service to get all products
module.exports = {
    getAllProducts:async ()=>{
        try {
            const products = await Product.findAll();
            console.log(products)
            return products;
        }
        catch (error) {
            console.log(error)
            throw new Error('Error fetching products: ' + error.message);
        }
    },

    addProduct:async (productData) => {
        try {
            const newProduct = await Product.create(productData);
            return newProduct;
        } catch (error) {
            throw new Error('Error adding product: ' + error.message);
        }
    }
}