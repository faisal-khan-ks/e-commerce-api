const UserService = require('../services/user.service');

module.exports = {
    addUser: async (req, res) => {
        try {
            const userData = req.body;
            const newUser = await UserService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await UserService.getAllUser();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};