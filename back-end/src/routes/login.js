const express = require('express');
const router = express.Router();

const logincontroller = require('../controllers/logincontroller');
router.post('/',logincontroller.index);
module.exports = router; 