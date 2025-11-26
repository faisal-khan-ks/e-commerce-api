const AuthService = require('../services/auth.service');
require('dotenv').config();

module.exports = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const result = await AuthService.login(email, password);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    authMiddleware: async (req, res) => {
        try {
            let token = req.headers.authorization.replace('Bearer ', '');
            if (!token) {
                return res.status(401).json({ error: 'No token provided' });
            }
            const result = await AuthService.verifyToken(token);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}