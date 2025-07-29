const { skills } = require('../models')

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
    const { name, level, category } = req.body;

    if (!name || !level || !category) {
        return res.status(400).json({
            message: 'All fields (name, level, category) are required'
        });
    }
}

