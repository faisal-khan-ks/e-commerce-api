const { body } = require('express-validator');

const validateAddUser = [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('user_type').isIn(['customer', 'admin', 'seller']).withMessage('User type must be either customer, admin, or seller'),
]

module.exports = {
    validateAddUser
};