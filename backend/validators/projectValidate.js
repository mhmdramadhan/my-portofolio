const { body } = require('express-validator');

exports.projectValidation = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('thumbnail')
        .notEmpty().withMessage('Thumbnail is required')
        .isURL().withMessage('Thumbnail must be a valid URL'),
    body('github_url')
        .optional()
        .isURL().withMessage('GitHub URL must be a valid URL'),
    body('live_url')
        .optional()
        .isURL().withMessage('Live URL must be a valid URL'),
    body('is_featured')
        .optional()
        .isIn(['yes', 'no']).withMessage('is_featured must be either "yes" or "no"'),
    body('prId').optional().isInt().withMessage('prId must be an integer'),
    body('languageIds')
        .optional()
        .isArray().withMessage('languageIds must be an array')
        .custom((value) => {
            if (value && value.length > 0) {
                return value.every(id => typeof id === 'number');
            }
            return true; // If no languageIds, it's valid
        }).withMessage('Each languageId must be a number')
        .customSanitizer((value) => {
            return Array.isArray(value) ? value.map(Number) : [];
        })


];