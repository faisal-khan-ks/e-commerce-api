const express = require('express');
const app = express();

app.use('/api/products', require('./product.route'));

module.exports = app;