const express = require('express');
const router = express.Router();
const Document = require('../models/Document');
const { uploadToS3 } = require('../middleware/upload'); // For S3 (or use multer for local)
const { check, validationResult } = require('express-validator');

// Updated document upload route with validation and S3
router.post('/upload', [
  check('title').notEmpty().withMessage('Title is required'),
  check('description').optional().isLength({ max: 500 }),
], async (req, res) => {
  // 1. Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // 2. Handle file upload (S3 or local)
  try {
    const file = req.files.file; // Assumes you're using multipart/form-data
    let fileUrl;

    // For AWS S3 (recommended):
    const s3Response = await uploadToS3(file); 
    fileUrl = s3Response.Location;

    // For local uploads (alternative):
    // fileUrl = `/uploads/${file.name}`; 

    // 3. Save to database
    const document = new Document({
      title: req.body.title,
      description: req.body.description,
      fileUrl,
      user: req.user.id // From verifyToken middleware
    });

    await document.save();
    res.status(201).json(document);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;