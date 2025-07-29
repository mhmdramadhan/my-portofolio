const { profile } = require('../models');
const { validationResult } = require('express-validator');


exports.getAll = async (req, res) => {
    try {
        const profiles = await profile.findAll();
        res.status(200).json({
            message: 'Profiles retrieved successfully',
            data: profiles
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving profiles',
            error: error.message
        });
    }
};

exports.create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, title, description, photo_url } = req.body;
    try {
        const newProfile = await profile.create({
            name,
            title,
            description,
            photo_url
        });
        res.status(201).json({
            message: 'Profile created successfully',
            data: newProfile
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating profile',
            error: error.message
        });
    }
};

exports.update = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const { name, title, description, photo_url } = req.body;
    try {
        const [updated] = await profile.update({
            name,
            title,
            description,
            photo_url
        }, {
            where: { id }
        });
        if (updated) {
            const updatedProfile = await profile.findByPk(id);
            res.status(200).json({
                message: 'Profile updated successfully',
                data: updatedProfile
            });
        } else {
            res.status(404).json({
                message: 'Profile not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error updating profile',
            error: error.message
        });
    }
}

exports.deleteF = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await profile.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(200).json({
                message: 'Profile deleted successfully'
            });
        } else {
            res.status(404).json({
                message: 'Profile not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting profile',
            error: error.message
        });
    }
};
