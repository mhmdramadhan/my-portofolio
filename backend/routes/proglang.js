const express = require('express');
const { auth } = require('../controllers/authController');
const programmingLanguageController = require('../controllers/proglangController');
const { progrLangValidate } = require('../validators/progLangValidate');
const router = express.Router();

router.get('/', auth, programmingLanguageController.getAll);
router.post('/create', auth, progrLangValidate, programmingLanguageController.create);
router.put('/:id', auth, progrLangValidate, programmingLanguageController.update);
router.delete('/:id', auth, programmingLanguageController.deleteF);


module.exports = router;