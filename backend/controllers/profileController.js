const { profile } = require('../models')


exports.create = async (req, res) => {
    const { name, title, description, photo_url } = req.body;

    if (!name || !title || !description || !photo_url) {
        return res.status(400).json({
            message: 'All fields (name, title, description, photo_url) are required'
        });
    }

    // check valid url
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator 
    if (!urlPattern.test(photo_url)) {
        return res.status(400).json({
            message: 'Invalid photo URL'
        });
    }

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