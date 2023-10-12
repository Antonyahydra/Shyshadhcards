const express = require('express');
const { newUservcard } = require('../controllers/Uservcard/Cardcontroler');

const  router = express.Router();

router.post('/newvcard',newUservcard)

module.exports = router