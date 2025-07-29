const express = require('express');
const { auth } = require('../controllers/authController');
const { getAll } = require('../controllers/skillsController');
const router = express.Router();

router.get('/', auth, getAll)


module.exports = router;