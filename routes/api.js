const express = require('express');
const app = express();

app.use('/api/products', require('./product.route'));
app.use('/api/users', require('./user.route'));
app.use('/api/auth', require('./auth.route'));

module.exports = app;