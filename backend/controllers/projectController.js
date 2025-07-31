
const { validationResult } = require('express-validator');
const { projects } = require('../models');

exports.getAll = async (req, res) => {
    try {
        const allProglang = await allProglang.findAll();
        res.status(200).json({
            message: 'Programming Language retrieved successfully',
            data: allProglang
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving Programming Language',
            error: error.message
        });
    }
};

exports.create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, type, icon_url, proficiency } = req.body;

    try {
        const newData = await programmingLanguage.create({
            name,
            type,
            icon_url,
            proficiency
        })
        res.status(201).json({
            message: 'Programming language created successfully',
            data: newData
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating programming language',
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
    const { name, type, icon_url, proficiency } = req.body;
    try {
        const [updated] = await programmingLanguage.update({
            name,
            type,
            icon_url,
            proficiency
        }, {
            where: { id }
        });
        if (updated) {
            const updatedData = await programmingLanguage.findByPk(id);
            res.status(200).json({
                message: 'Programming language updated successfully',
                data: updatedData
            });
        } else {
            res.status(404).json({
                message: 'Programming language not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error updating programming language',
            error: error.message
        });
    }
}

exports.deleteF = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await programmingLanguage.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(200).json({
                message: 'Programming language deleted successfully'
            });
        } else {
            res.status(404).json({
                message: 'Progaramming language not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting programming language',
            error: error.message
        });
    }
};

