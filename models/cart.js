const sequelize = require('sequelize');
const db = require('../config/database');

const Cart = db.define('cart', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    created_at: {
        type: sequelize.DATE,
        defaultValue: sequelize.NOW
    },
    updated_at: {
        type: sequelize.DATE,
        defaultValue: sequelize.NOW
    }
}, {
    tableName: 'cart',
    timestamps: false
});

module.exports = Cart;