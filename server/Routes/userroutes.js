const express = require('express');
const userController = require('../Controller/UserController');
const router = express.Router();

// User authentication routes
router
    .post('/register', userController.createUser)
    .get('/users', userController.getAllUsers)
    .get('/users/:id', userController.getUserById)
    .put('/users/:id', userController.updateUser)
    .delete('/users/:id', userController.deleteUser)
    .post('/login', userController.loginUser)
    // .post('/logout', userController.logoutUser)
    .get('/users/role/:role', userController.getUsersByRole)
    

module.exports = router;