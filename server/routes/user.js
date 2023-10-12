const express = require('express');
const { createUser,getUser, updateUser, deleteUser, login } = require('../controllers/user');
const router = express.Router();



router.post('/user', createUser)
router.post('/login', login)
router.get('/user', getUser)
router.put('/user',updateUser)
router.delete('/user',deleteUser)


module.exports = router 
