const express = require('express');
const { register, updateStudents } = require('../controller/students.controller');

const router = express.Router();


router.post('/register', register);
router.put('/update', updateStudents);




module.exports = router;