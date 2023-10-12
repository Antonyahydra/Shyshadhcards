const express = require('express');
const { CreateApoinment, getApoinment, updateApoinment, deleteApoinments } = require('../controllers/Apoinments');
const router = express.Router();

router.post('/addapoinment',CreateApoinment)
router.get('/apoinment',getApoinment)
router.put('/apoinment',updateApoinment)
router.post('/apoinment',deleteApoinments)



module.exports =  router