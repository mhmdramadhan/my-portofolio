const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { profileValidation } = require('../validators/profileValidator');

router.get('/', profileValidation, profileController.getAll);
router.post('/create', profileValidation, profileController.create);
router.put('/:id', profileValidation, profileController.update);
router.delete('/:id', profileController.deleteF);

module.exports = router;


