const express = require('express');
const { auth } = require('../controllers/authController');
const skillsController = require('../controllers/skillsController');
const { skillsValidate } = require('../validators/skillsValidate');
const router = express.Router();

router.get('/', auth, skillsController.getAll)
router.post('/create', auth, skillsValidate, skillsController.create);
router.put('/:id', auth, skillsValidate, skillsController.update);
router.delete('/:id', auth, skillsController.deleteF);


module.exports = router;