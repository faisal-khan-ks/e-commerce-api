const express = require('express');

// Create Application
const app = express();

// Create MySQL Connection


app.use('/', require('./routes/api'));

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
}); 