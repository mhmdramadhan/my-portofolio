// Example using Express.js
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({
    path: '.env.local',
    debug: true
});

// Include route files
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');
const skillsRoute = require('./routes/skills');
const progLangRoute = require('./routes/proglang');

// Use routes
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute);
app.use('/api/skills', skillsRoute);
app.use('/api/proglang', progLangRoute);


const port = process.env.PORT; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});