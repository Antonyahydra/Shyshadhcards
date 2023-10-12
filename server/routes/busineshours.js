const express = require('express');
const { CreateBusiness, getBusiness, updateBusiness, deleteBusiness } = require('../controllers/busineshours')
const router = express.Router();


router.post('/addbusiness', CreateBusiness)
// router.get('/business', getBusiness)
// router.put('/business',updateBusiness)
// router.delete('/business',deleteBusiness)


module.exports  =   router
