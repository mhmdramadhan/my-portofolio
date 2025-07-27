// Example using Express.js
const express = require('express');
const app = express();
const cors = require('cors');

// Include route files
const usersRoute = require('./routes/users');

// Use routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', usersRoute);

const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});