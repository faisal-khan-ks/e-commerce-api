const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    createUser: async (userData) => {
        try {
            const { username, email, password, user_type } = userData;

            const password_hash = await bcrypt.hash(password, 10);

            let user = await User.create({
                username,
                email,
                password_hash,
                user_type
            });

            return user.email;
        } catch (error) {
            return { error: error.message };
        }
    },

    getAllUser: async () => {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            return { error: error.message };
        }
    }
}