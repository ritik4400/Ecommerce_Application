const express = require('express')
const router = express.Router()

const user = require('../controller/userController')
router.post('/createUser', user.createUser )

module.exports = router;