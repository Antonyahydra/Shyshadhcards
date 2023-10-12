const asyncHandler = require('express-async-handler')
const Users = require("../models/user");
// const { fileupload } = require("./imagehandler");

// @desc    Get all users
// Setup Controller

//creating new user

// const createUser = asyncHandler (req, res) => {
//   const new_user = new Users({
//     Firstname: req.body.Fullname,
//     Secondname: req.body.Secondname,
//     Email_id: req.body.Email,
//     Password: req.body.Password,
//   });
  const createUser = asyncHandler(async (req, res) => {
   
    try {
        const newUser = await Users.create(req.body);
        res.json(newUser);
    } catch (error) {
        throw new Error(error);
    }
})
  // fileupload();

//   await new_user
//     .save()
//     .then((response) => {
//       res.status(200).json({
//         data: response,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: err,
//       });
//     });
// };

//view the user

const getUser = async (req, res) => {
  try {
    const users = await Users.find();
    return res.status(200).json({
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

//update user details

const updateUser = async (req, res) => {
  const query = {
    _id: req.body._id,
  };
  const data = {
    $set: {
      Firstname: req.body.Firstname,
      Secondname: req.body.Secondname,
      Email_id: req.body.Email_id,
      Password: req.body.Password,
    },
  };
  try {
    Users.updateMany(query, data)
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

//delete the user

const deleteUser = async (req, res) => {
  const _id = req.body._id;

  try {
    const deletedUser = await Users.findByIdAndDelete(_id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    return res.status(200).json({
      message: "User deleted successfully.",
      data: deletedUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({
      Email_id: username,
    });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  login,
};
