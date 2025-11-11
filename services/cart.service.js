const Cart = require('../models/cart');
const CartItem = require('../models/cart_items');
const Product = require('../models/product');

module.exports = {
    createCart: async (userId) => {
        try {
            const cart = await Cart.create({ userId });
            return { message: 'Cart created successfully', cartId: cart.id };
        } catch (error) {
            return { error: error.message };
        }
    },

    addItems: async (cartId, productId, quantity) => {
        try {
            const product = await Product.findByPk(productId);
            if (!product) {
                throw new Error('Product not found');
            }
            const cartItem = await CartItem.create({ cartId, productId, quantity });
            return { message: 'Item added to cart', cartItemId: cartItem.id };
        } catch (error) {
            return { error: error.message };
        }
    },

    getCartItems: async (userId) => {
        try {
            const cart = await Cart.findByPk({ where: { userId } });
            if (cart) {
                const items = await CartItem.findAll({ where: { cartId: cart.id } });
                return items;
            } else {
                return { message: 'Cart not found' };
            }
        } catch (error) {
            return { error: error.message };
        }
    },

    updateCartItem: async (cartItemId, quantity) => {
        try {
            const cartItem = await CartItem.findByPk(cartItemId);
            if (!cartItem) {
                throw new Error('Cart item not found');
            }
            cartItem.quantity = quantity;
            await cartItem.save();
            return { message: 'Cart item updated successfully' };

        } catch (error) {
            return { error: error.message };
        }
    },

    deleteCartItem: async (cartItemId) => {
        try {
            const cartItem = await CartItem.findByPk(cartItemId);
            if (!cartItem) {
                throw new Error('Cart item not found');
            }
            await cartItem.destroy();
            return { message: 'Cart item deleted successfully' };
        } catch (error) {
            return { error: error.message };
        }
    },
}