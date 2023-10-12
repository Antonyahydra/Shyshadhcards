const Products = require("../models/product")
const asyncHandler = require("express-async-handler");


const CreateProduct = asyncHandler(async(req,res)  => {
    const newProduct = new Products({
        Productname:req.body.Productname,
        Currency:req.body.Currency,
        Price:req.body.Price,
        Producturl:req.body.Producturl,
        Description:req.body.Description,
        Producticon:req.body.Producticon,
    });
    await newProduct.save()
    .then((response) =>{
        return res.status(200).json({
            data:response,
        });
    })
    .catch((err) => {
        return res.status(500).json({
            message:err,
        });
    });
});


//view products

const getProduct = async (req, res) => {
    try {
      const products= await Products.find();
      return res.status(200).json(
        products
      );
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };


//update services 

const updateProduct = async (req, res) => {
    const query = {
      _id: req.body._id,
    };
    const data = {
      $set: {
        Productname:req.body.Productname,
        Currency:req.body.Currency,
        Price:req.body.Price,
        Producturl:req.body.Producturl,
        Description:req.body.Description,
        Producticon:req.body.Producticon,
      },
    };
    try {
      Products.updateMany(query, data)
        .then((response) => {
          return res.status(200).json({
            data: response,
          });
        })
        .catch((err) => {
          return res.status(500).json({
            message: err.message,
          });
        });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  };

 //delete Products
 
 const deleteProduct = async (req, res) => {
    const _id = req.body._id;
  
    try {
      const deletedProduct = await Products.findByIdAndDelete(_id);
  
      if (!deletedProduct) {
        return res.status(404).json({
          message: "Product not found.",
        });
      }
  
      return res.status(200).json({
        message: "Product deleted successfully.",
        data:deletedProduct,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };


module.exports={
 CreateProduct,getProduct,updateProduct,deleteProduct}