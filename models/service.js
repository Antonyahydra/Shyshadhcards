const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  services: [
    {
      Servicename: {
        type: String,
      },
      Description: {
        type: String,
        required: true,
      },
    },
  ],
});

// Export the model based on the schema
module.exports = mongoose.model('Service', ServiceSchema);
