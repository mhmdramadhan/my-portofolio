
const { validationResult } = require('express-validator');
const { projects } = require('../models');

exports.getAll = async (req, res) => {
    try {
        const allProglang = await projects.findAll({
            include: [
                {
                    model: projects.ProgrammingLanguage,
                    as: 'programmingLanguages',
                    through: { attributes: [] } // Exclude join table attributes
                },
                {
                    model: projects.ProgrammingLanguage,
                    as: 'highlightLanguage'
                }
            ]
        });
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

    const {
        title,
        description,
        thumbnail,
        github_url,
        live_url,
        is_featured,
        prId, // id programming language utama
        languageIds // array: [1, 2, 3] 
    } = req.body;

    try {
        const newData = await projects.create({
            title,
            description,
            thumbnail,
            github_url,
            live_url,
            is_featured,
            prId // foreign key ke ProgrammingLanguage
        });

        // buat relasi many-to-many ke table join
        if (Array.isArray(languageIds) && languageIds.length > 0) {
            await projects.setLanguages(languageIds); // auto insert ke table join
        }


        res.status(201).json({
            message: 'Project created successfully',
            data: newData
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating Project',
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
    const {
        title,
        description,
        thumbnail,
        github_url,
        live_url,
        is_featured,
        prId, // programming language utama
        languageIds // array of programming language IDs
    } = req.body;

    try {
        const project = await projects.findByPk(id);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // update fields (hanya jika ada)
        await project.update({
            title: title ?? project.title,
            description: description ?? project.description,
            thumbnail: thumbnail ?? project.thumbnail,
            github_url: github_url ?? project.github_url,
            live_url: live_url ?? project.live_url,
            is_featured: is_featured ?? project.is_featured,
            prId: prId ?? project.prId
        });

        // update many-to-many jika disediakan
        if (Array.isArray(languageIds)) {
            await project.setLanguages(languageIds);
        }

        res.status(200).json({
            message: 'Project updated successfully',
            data: project
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error updating project',
            error: error.message
        });
    }
};


exports.deleteF = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await projects.findByPk(id);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // hapus relasi many-to-many dulu jika diperlukan
        await project.setLanguages([]); // kosongkan relasi

        await project.destroy();

        res.status(200).json({ message: 'Project deleted successfully' });

    } catch (error) {
        res.status(500).json({
            message: 'Error deleting project',
            error: error.message
        });
    }
};


