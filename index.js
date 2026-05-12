const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');

// Create Application
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Log incoming requests
app.use(morgan('dev'));

// Use API routes
app.use('/', require('./routes/api'));

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}/`);
}); 