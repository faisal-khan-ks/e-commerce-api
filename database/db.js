const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Set to console.log to see SQL queries
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// Test connection
sequelize.authenticate()
    .then(() => {
        console.log('Connected to MySQL database with Sequelize');
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
    });

module.exports = sequelize;