const { body } = require('express-validator');

exports.skillsValidate = [
    body('name').notEmpty().withMessage('Name is required'),
    body('level').notEmpty().withMessage('Title is required')
        .isIn(['beginner', 'intermediate', 'advanced', 'expert'])
        .withMessage('Level must be one of the following: beginner, intermediate, advanced, expert'),
    body('category').notEmpty().withMessage('Title is required')
        .isIn(['soft', 'hard skills', 'languages', 'tachnical'])
        .withMessage('Category must be one of the following: soft, hard skills, languages, technical'),
];