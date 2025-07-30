const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { profileValidation } = require('../validators/profileValidate');
const { auth } = require('../controllers/authController');

router.get('/', auth, profileController.getAll);
router.post('/create', auth, profileValidation, profileController.create);
router.put('/:id', auth, profileValidation, profileController.update);
router.delete('/:id', auth, profileController.deleteF);

module.exports = router;


