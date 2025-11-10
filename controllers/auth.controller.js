const AuthService = require('../services/auth.service');

module.exports = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const result = await AuthService.login(email, password);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}