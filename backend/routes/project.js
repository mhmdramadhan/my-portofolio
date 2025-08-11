const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { projectValidation } = require('../validators/projectValidate');
const { auth } = require('../controllers/authController');

router.get('/', auth, projectController.getAll);
router.post('/create', auth, projectValidation, projectController.create);
router.put('/:id', auth, projectValidation, projectController.update);
router.delete('/:id', auth, projectController.deleteF);

module.exports = router;


