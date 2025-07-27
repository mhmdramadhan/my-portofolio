// Example using Express.js
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Include route files
const authRoute = require('./routes/auth');

// Use routes
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);

const port = process.env.PORT; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});