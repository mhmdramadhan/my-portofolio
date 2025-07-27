const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(401).json({ message: 'Email tidak ditemukan' });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ message: 'Password salah' });

        const token = jwt.sign({
            id: user.id,
            role: user.role,
            ustadzId: user.ustadzId
        }, JWT_SECRET, { expiresIn: '2h' });

        // Kirim token dan user ke client
        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                ustadzId: user.ustadzId
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Terjadi kesalahan', error: err.message });
    }
};

exports.register = async (req, res) => {
    const { email, password, username } = req.body;
    
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Email, password wajib diisi' });
        }

        const existing = await User.findOne({ where: { email } });
        if (existing) return res.status(400).json({ message: 'Email sudah digunakan' });

        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hashed,
            username,
        });

        res.status(201).json({
            message: 'User berhasil dibuat',
            user: {
                id: user.id,
                email: user.email,
                username: user.username
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Terjadi kesalahan', error: err.message });
    }
};