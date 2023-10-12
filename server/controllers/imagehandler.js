// Set up the storage for multer
const { log } = require('console');
const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
  });
  
  // Create the multer middleware
  const upload = multer({ storage: storage });
  
  // Handle the image upload
  app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
  
    const imageFilePath = path.join(__dirname, 'uploads', req.file.filename);
  
    // Read the image file as a buffer
    const imageBuffer = fs.readFileSync(imageFilePath);
  
    // Create a new document for the image in MongoDB
    const image = new Image({
      name: req.file.originalname,
      data: imageBuffer,
    });
  
    try {
      // Save the image document to the database
      await image.save();
  
      res.send('Image uploaded and saved successfully.');
    } catch (err) {
      console.error('Error saving image to MongoDB:', err);
      res.status(500).send('Error saving image to MongoDB.');
    }
  });

  
const fileupload=()=>{
    console.log('file  uploaded');
}

module.exports={fileupload}