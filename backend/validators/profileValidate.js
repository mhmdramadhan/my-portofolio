const { body } = require('express-validator');

exports.profileValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('photo_url')
        .notEmpty().withMessage('Photo URL is required')
        .isURL().withMessage('Photo URL must be a valid URL')
];