const express = require('express');
const { create, getAll, update, deleteF } = require('../controllers/profileController');
const { auth } = require('../controllers/authController');
const router = express.Router();

// Define a route
router.get('/', auth, getAll);
router.post('/create', auth, create);
router.put('/:id', auth, update);
router.delete('/:id', auth, deleteF);

module.exports = router;


