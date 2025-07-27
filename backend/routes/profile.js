const express = require('express');
const { create } = require('../controllers/profileController');
const { auth } = require('../controllers/authController');
const router = express.Router();

// Define a route
router.post('/create', auth, create);

module.exports = router;


