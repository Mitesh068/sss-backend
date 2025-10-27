import express from "express";
import multer from "multer";
import { createCareer, getCareers } from "../controllers/CareerController.js";
import upload from "../middleware/upload.js";


const CareerRouter = express.Router();

CareerRouter.post("/job", upload.single("resume"), createCareer);

// Error handling middleware for multer
CareerRouter.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'File too large. Maximum size is 10MB.' });
    }
  }
  if (error.message === 'Only PDF files are allowed') {
    return res.status(400).json({ message: 'Only PDF files are allowed' });
  }
  res.status(500).json({ message: 'Upload error', error: error.message });
});

CareerRouter.get("/jobs", getCareers);

export default CareerRouter;
