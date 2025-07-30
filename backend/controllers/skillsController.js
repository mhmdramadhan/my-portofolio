const { validationResult } = require('express-validator');
const { skills } = require('../models');
const { create } = require('./profileController');

exports.getAll = async (req, res) => {
    try {
        const skills = await skills.findAll();
        res.status(200).json({
            message: 'Skills retrieved successfully',
            data: skills
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving skills',
            error: error.message
        });
    }
};

exports.create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, level, category } = req.body;

    try {
        const newSkill = await skills.create({
            name,
            level,
            category
        })
        res.status(201).json({
            message: 'Skills created successfully',
            data: newSkill
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating skills',
            error: error.message
        });
    }
}

exports.update = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const { name, level, category } = req.body;
    try {
        const [updated] = await skills.update({
            name,
            level,
            category
        }, {
            where: { id }
        });
        if (updated) {
            const updatedSkill = await skills.findByPk(id);
            res.status(200).json({
                message: 'Skills updated successfully',
                data: updatedSkill
            });
        } else {
            res.status(404).json({
                message: 'Skills not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error updating skill',
            error: error.message
        });
    }
}

exports.deleteF = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await skills.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(200).json({
                message: 'Skills deleted successfully'
            });
        } else {
            res.status(404).json({
                message: 'Skills not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting skill',
            error: error.message
        });
    }
};

