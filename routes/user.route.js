const express = require('express');
const UserCtrl= require('../controllers/user.controller');

const router = express.Router();

router.get('/', UserCtrl.getAllUsers);

router.post('/', UserCtrl.addUser);

module.exports = router;