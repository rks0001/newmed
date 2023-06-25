const express = require("express");
const multer = require("multer");
const Image = require("../models/prescription");
const fs = require("fs");

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the directory to store the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// POST /images
router.post("/images", upload.single("image"), async (req, res) => {
  try {
    const imageFile = req.file;
    if (!imageFile) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    const imageData = fs.readFileSync(imageFile.path);
    const encodedImage = imageData.toString("base64");

    const newImage = new ImageModel({
      name: req.body.name || "Untitled",
      image: {
        data: encodedImage,
        contentType: imageFile.mimetype,
      },
    });

    await newImage.save();

    // Remove the uploaded file from the server
    fs.unlinkSync(imageFile.path);

    res.status(201).json({ message: "Image saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
