const express = require('express');
const { CreateService, getService, updateService, deleteService, getSingleservice } = require('../controllers/service');
const router =express.Router();


router.post('/addservice',CreateService)
router.get('/viewservice',getService)
router.put('/editservice',updateService)
router.delete('/deleteservice',deleteService)
router.post('/getsingle',getSingleservice)



module.exports = router
