import CareerModel from "../models/CareerModel.js";

export const createCareer = async (req, res) => {
  try {
    const { name, email, mobile, experience } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required" });
    }

    // Create URL instead of storing file path
    const resumeUrl = `/uploads/resumes/${req.file.filename}`;
    const newCareer = new CareerModel({
      name,
      email,
      mobile,
      experience,
      resume: resumeUrl,
    });

    await newCareer.save();
    res.status(201).json({ message: "Career form submitted successfully", data: newCareer });
  } catch (error) {
    console.error("Error in createCareer:", error);
    res.status(500).json({ message: "Error submitting career form", error: error.message });
  }
};

export const getCareers = async (req, res) => {
  try {
    const careers = await CareerModel.find();
    res.status(200).json({ message: "Careers retrieved successfully", data: careers });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving careers", error: error.message });
  }
};
