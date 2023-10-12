const express = require('express');
const { createNewVcard, getVcard, updateVcard, deleteVcard } = require('../controllers/vcard');
const router = express.Router();



router.post('/addvcard',createNewVcard)
router.get('/',getVcard)
router.put('/vcard',updateVcard)
router.delete('/vcard',deleteVcard)



module.exports = router