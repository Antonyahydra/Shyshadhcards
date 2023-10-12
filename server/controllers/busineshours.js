const expressAsyncHandler = require("express-async-handler");
const Businesshours = require("../models/busineshours");

// Create Business hours
const CreateBusiness = expressAsyncHandler(async (req, res) => {
  try {
    const { businessDays, from_time, to_time } = req.body; 

    for (const dayData of businessDays) {
      const { day, open } = dayData;

      const existingBusiness = await Businesshours.findOne({ day });

      if (existingBusiness) {
        existingBusiness.open = open;
        existingBusiness.from_time = from_time;
        existingBusiness.to_time = to_time;
        await existingBusiness.save();
      } else {
        await Businesshours.create({
          day,
          open,
          from_time,
          to_time,
        });
      }
    }

    res.status(200).json({ message: 'Business hours updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});






// View Business hours
const getBusiness = async (req, res) => {
  try {
    const Business = await Busineshours.find();
    return res.status(200).json({
      data: Business,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};




// Update Business hour
const updateBusiness = async (req, res) => {
  const { _id, Day, From_time, To_time } = req.body;

  try {
    const updatedBusiness = await Busineshours.findByIdAndUpdate(
      _id,
      { Day, From_time, To_time },
      { new: true }
    );

    if (!updatedBusiness) {
      return res.status(404).json({
        message: "Business hour not found.",
      });
    }

    return res.status(200).json({
      message: "Business hour updated successfully.",
      data: updatedBusiness,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Business hour
const deleteBusiness = async (req, res) => {
  const _id = req.body._id;

  try {
    const deletedBusiness = await Busineshours.findByIdAndDelete(_id);

    if (!deletedBusiness) {
      return res.status(404).json({
        message: "Business hour not found.",
      });
    }

    return res.status(200).json({
      message: "Business hour deleted successfully.",
      data: deletedBusiness,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  CreateBusiness,
  getBusiness,
  updateBusiness,
  deleteBusiness,
};
