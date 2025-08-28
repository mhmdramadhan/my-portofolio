const { body } = require('express-validator');

exports.progrLangValidate = [
    body('name')
        .notEmpty().withMessage('Name is required'),
    body('icon_url')
        .notEmpty().withMessage('Name is required')
        .isURL().withMessage('Photo URL must be a valid URL'),
    body('type').notEmpty().withMessage('Title is required')
        .isIn(['language', 'framework', 'library'])
        .withMessage('type must be one of the following: language, framework, library'),
    body('proficiency').notEmpty().withMessage('Title is required')
        .isIn(['beginner','intermediate','advanced','expert'])
        .withMessage('proficiency must be one of the following: beginner, intermediate, advanced, expert'),
];