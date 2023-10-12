const mongoose= require("mongoose");
const Services = require("../models/service");
const asyncHandler = require("express-async-handler");

const CreateService = asyncHandler(async (req, res) => {
  const { services } = req.body; // Assuming req.body contains an array of services

  try {
    const response = await Services.create({ services });
    return res.status(200).json({
      data: response,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});


//view service

const getService = async (req, res) => {
  try {
    const services = await Services.find();
    return res.status(200).json(services);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

//get single item


const getSingleservice = async (req,res) => {
  try {
    const services = await Services.find({_id : new mongoose.Types.ObjectId(req.body._id)})
    return res.status(200).json(services);
  } catch (error) {
    return res.status(500).json({
      message:error.message,
    });
  }
};



//update services

const updateService = async (req, res) => {
  const query = {
    Serviceurl: req.body.Serviceurl,
  };
  const data = {
    $set: {
      Servicename: req.body.Servicename,
      Description: req.body.Description,
      // Serviceicon: req.body.Serviceicon,
    },
  };
  try {
    Services.updateMany(query, data)
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

//delete Services

const deleteService = async (req, res) => {
  const Serviceurl = req.body.Serviceurl;

  try {
    const deletedService = await Services.findByIdAndDelete(Serviceurl);

    if (!deletedService) {
      return res.status(404).json({
        message: "Service not found.",
      });
    }

    return res.status(200).json({
      message: "Service deleted successfully.",
      data: deleteService,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  CreateService,
  getService,
  updateService,
  deleteService,
  getSingleservice
};
