const express = require('express')
const router = express.Router()
const {authentication } = require('../middleware/auth')

const createUser = require('../controller/createUser')
router.post('/createUser', authentication, createUser )

const userController = require('../controller/userController')
router.get('/fetchUserById/:id' ,authentication, userController.fetchUserById)//fetch by id
router.get('/fetchUser' , authentication, userController.fetchUsers)
router.put('/update/:id',authentication, userController.updateUser)
router.patch('/delete/:id',authentication, userController.deleteUser)
router.post('/login' , userController.loginUser)


module.exports = router;