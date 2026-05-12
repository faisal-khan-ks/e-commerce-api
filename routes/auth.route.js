const AuthCtrl = require('../controllers/auth.controller');
const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.post('/signup', userController.addUser);
router.post('/login', AuthCtrl.login);

module.exports = router;