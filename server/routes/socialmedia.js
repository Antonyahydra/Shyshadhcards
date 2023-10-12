const express = require('express');
const { createSocial, getSocial, updateSocial, deleteSocial } = require('../controllers/socialmedia');
const router = express.Router();




router.post('/addsocial',createSocial)
router.get('/social',getSocial)
router.put('/social',updateSocial)
router.delete('/social',deleteSocial)



module.exports = router