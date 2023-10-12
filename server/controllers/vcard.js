const Vcards = require("../models/vcard");
const asyncHandler = require("express-async-handler");

const createNewVcard = asyncHandler(async (req, res) => {
  console.log(req.body);
  const new_vcard = new Vcards({
    // URLAlias: req.body.Urlalias,
    // Vcardname: req.body.Vcardname,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Phone: req.body.Phone,
    Alternatephone: req.body.Alternatephone,
    Email: req.body.Email,
    Alternateemail: req.body.Alternateemail,
    Location: req.body.Location,
    Dateofbirth: req.body.Dateofbirth,
    Jobtitle: req.body.Jobtitle,
    Company: req.body.Company,
    Description: req.body.Description,
    // Profileimage: req.body.Profileimage,
    // Coverimage: req.body.Coverimage,
    
   
   
    
    
    
    // Locationurl: req.body.Locationurl,
   
    
    
    // Defaultlanguage: req.body.Defaultlanguage,
    // Languageenable: req.body.Languageenable,
    // Enableenquery: req.body.Enableenquery,
    // Enabledownlod: req.body.Enabledownlod,
  });
  await new_vcard
    .save()
    .then((response) => {
      return res.status(200).json({
        data: response,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: err,
      });
    });
});

//view Vcard

const getVcard = async (req, res) => {
  try {
    const vcards = await Vcards.find();
    return res.status(200).json({
      data: vcards,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

//update vacard bascic details

const updateVcard = async (req, res) => {
  const query = {
    _id: req.body._id,
  };
  const data = {
    $set: {
      URLAlias: req.body.Urlalias,
      Vcardname: req.body.Vcardname,
      Occupation: req.body.Occupation,
      Description: req.body.Description,
      Profileimage: req.body.Profileimage,
      Coverimage: req.body.Coverimage,
      Firstname: req.body.Firstname,
      Email: req.body.Email,
      Phone: req.body.Phone,
      Alternateemail: req.body.Alternateemail,
      Alternatephone: req.body.Alternatephone,
      Location: req.body.Location,
      Locationurl: req.body.Locationurl,
      Dateofbirth: req.body.Dateofbirth,
      Company: req.body.Company,
      Jobtitle: req.body.Jobtitle,
      Defaultlanguage: req.body.Defaultlanguage,
      Languageenable: req.body.Languageenable,
      Enableenquery: req.body.Enableenquery,
      Enabledownlod: req.body.Enabledownlod,
    },
  };
  try {
    Vcards.updateMany(query, data)
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

//delete Vcard

const deleteVcard = async (req, res) => {
  const _id = req.body._id;

  try {
    const deletedVcard = await Vcards.findByIdAndDelete(_id);

    if (!deletedVcard) {
      return res.status(404).json({
        message: "Vcard not found.",
      });
    }

    return res.status(200).json({
      message: "Vcard deleted successfully.",
      data: deletedVcard,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { 
                      createNewVcard, 
                      getVcard, 
                      updateVcard, 
                      deleteVcard 
                  };
