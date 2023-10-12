const express =require('express');
const { CreateProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/product');
const router = express.Router();



router.post('/addproduct',CreateProduct)
router.get('/viewproduct',getProduct)
router.put('/product',updateProduct)
router.delete('/product',deleteProduct)


module.exports  = router