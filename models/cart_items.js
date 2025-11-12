const sequelize = require('sequelize');
const db = require('../database/db');

const CartItem = db.define('cart_item', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cartId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'cart',
            key: 'id'
        }
    },
    productId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'product',
            key: 'id'
        }
    },
    quantity: {
        type: sequelize.INTEGER,
        allowNull: false
    }, created_at: {
        type: sequelize.DATE,
        defaultValue: sequelize.NOW
    },
    updated_at: {
        type: sequelize.DATE,
        defaultValue: sequelize.NOW
    }
}, {
    tableName: 'cart_item',
    timestamps: false
})

module.exports = CartItem;