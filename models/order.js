const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const Order = sequelize.define('Order', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    total_amount:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status:{
        type: DataTypes.ENUM('pending', 'completed', 'shipped', 'cancelled'),
        defaultValue: 'pending',
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updated_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
}, {
    tableName: 'order',
    timestamps: false
});

module.exports = Order;