
const asyncHandler = require("express-async-handler");
const Social = require("../models/socialmedia");


const createSocial = asyncHandler(async(req,res)  => {
    const newSocial = new Social({
        Website_url:req.body.Website_url,
        Twiter_url:req.body.Twiter_url,
        Facebook_url:req.body.Facebook_url,
        Instagram_url:req.body.Instagram_url,
        Reddit_url:req.body.Reddit_url,
        Tumbler_url:req.body.Tumbler_url,
        Youtube_url:req.body.Youtube_url,
        Website_url:req.body.Website_url,
        Linkedin_url:req.body.Linkedin_url,
        Pininterest_url:req.body.Pininterest_url,
        Tiktok_url:req.body.Tiktok_url

        
    });
    await newSocial.save()
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


//view Social

const getSocial = async (req, res) => {
    try {
      const socialmedia = await Social.find();
      return res.status(200).json({
        data: socialmedia,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };


//update social media

const updateSocial = async (req, res) => {
    const query = {
      _id: req.body._id,
    };
    const data = {
      $set: {
        Website_url:req.body.Website_url,
        Twiter_url:req.body.Twiter_url,
        Facebook_url:req.body.Facebook_url,
        Instagram_url:req.body.Instagram_url,
        Reddit_url:req.body.Reddit_url,
        Tumbler_url:req.body.Tumbler_url,
        Youtube_url:req.body.Youtube_url,
        Website_url:req.body.Website_url,
        Linkedin_url:req.body.Linkedin_url,
        Pininterest_url:req.body.Pininterest_url,
        Tiktok_url:req.body.Tiktok_url

      },
    };
    try {
      Social.updateMany(query, data)
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

 //delete Social media
 
 const deleteSocial = async (req, res) => {
    const _id = req.body._id;
  
    try {
      const deletedSocial = await Social.findByIdAndDelete(_id);
  
      if (!deletedSocial) {
        return res.status(404).json({
          message: "Social media not found.",
        });
      }
  
      return res.status(200).json({
        message: "Social meida deleted successfully.",
        data:deletedSocial,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };


module.exports={
  createSocial,getSocial,updateSocial,deleteSocial
    }