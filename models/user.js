const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_type: {
        type: DataTypes.ENUM('customer', 'admin', 'seller'),
        defaultValue: 'customer'
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {
    tableName: 'user', // Optional: explicitly set table name
    timestamps: false // Optional: adds createdAt and updatedAt fields
});

module.exports = User;