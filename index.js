const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Create Application
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.json());

// Enable CORS
app.use(cors());


// Use API routes
app.use('/', require('./routes/api'));

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}/`);
}); 