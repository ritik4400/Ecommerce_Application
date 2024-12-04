const express = require('express')
const router = express.Router()

const createUser = require('../controller/createUser')
router.post('/createUser', createUser )

const userController = require('../controller/userController')
router.get('/fetchUserById/:id' , userController.fetchUserById)//fetch by id
router.get('/fetchUser' , userController.fetchUsers)
router.put('/update/:id',userController.updateUser)
router.patch('/delete/:id',userController.deleteUser)
router.post('/login' ,userController.loginUser)


module.exports = router;