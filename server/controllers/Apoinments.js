const asyncHandler = require("express-async-handler");
const apoinments = require("../models/apoinments");



const CreateApoinment = asyncHandler(async(req,res)  => {
    const newApoinment = new apoinments({
        Day:req.body.Day,
        From_time:req.body.From_time,
        To_time:req.body.To_time,
        Plan:req.body.Plan
    });
    await newApoinment.save()
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


//view Apoinments

const getApoinment= async (req, res) => {
    try {
      const Apoinment = await apoinments.find();
      return res.status(200).json({
        data: Apoinment,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };


//update Apoinmemts 

const updateApoinment = async (req, res) => {
    const query = {
      _id: req.body._id,
    };
    const data = {
      $set: {
        Day:req.body.Day,
        From_time:req.body.From_time,
        To_time:req.body.To_time,
        Plan:req.body.Plan
      },
    };
    try {
      apoinments.updateMany(query, data)
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

 //delete Apoinments
 
 const deleteApoinments = async (req, res) => {
    const _id = req.body._id;
  
    try {
      const deletedApoinment = await Ap.findByIdAndDelete(_id);
  
      if (!deletedApoinment) {
        return res.status(404).json({
          message: "Apoinment not found.",
        });
      }
  
      return res.status(200).json({
        message: "Apoinment deleted successfully.",
        data:deletedApoinment,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };


module.exports={
    CreateApoinment,getApoinment,updateApoinment,deleteApoinments
}