const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    login: async (email, password) => {
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw new Error('User not found');
            }

            const isPasswordValid = await bcrypt.compare(password, user.password_hash);
            if (!isPasswordValid) {
                throw new Error('Invalid password');
            }

            // Generate JWT token
            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    user_type: user.user_type

                }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            })
            return {
                message: 'Login successful',
                userId: user.id,
                token,
                name: user.name,
                email: user.email,
                userType: user.user_type
            };
        }
        catch (error) {
            return { error: error.message };
        }
    },
}