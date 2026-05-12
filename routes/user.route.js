const express = require('express');
const UserCtrl = require('../controllers/user.controller');
const { validateAddUser } = require('../validators/user.validator');

const router = express.Router();

router.get('/', validateAddUser, UserCtrl.getAllUsers);

router.post('/', UserCtrl.addUser);

module.exports = router;