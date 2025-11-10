const AuthCtrl = require('../controllers/auth.controller');
const express = require('express');
const router = express.Router();

router.post('/login', AuthCtrl.login);

module.exports = router;