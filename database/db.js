const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('komerce', 'root', 'root', {
    host: 'localhost',
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