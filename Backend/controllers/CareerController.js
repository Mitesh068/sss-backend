import CareerModel from "../models/CareerModel.js";

export const createCareer = async (req, res) => {
  try {
    const { name, email, mobile, experience } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required" });
    }

    const newCareer = new CareerModel({
      name,
      email,
      mobile,
      experience,
      resume: req.file.path,
    });

    await newCareer.save();
    res.status(201).json({ message: "Career form submitted successfully", data: newCareer });
  } catch (error) {
    res.status(500).json({ message: "Error submitting career form", error: error.message });
  }
};
