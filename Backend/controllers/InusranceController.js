import InsuranceModel from "../models/Insurance.js";


export const InsuranceQuote = async (request, response) => {
  const { name, mobile, email } = request.body;

  try {
    if (!name || !mobile || !email) {
      return response.status(400).json({ message: "please provide the data" });
    }

    const newInsuranceQuote = new InsuranceModel({
      name,
      mobile, 
      email
    });

    await newInsuranceQuote.save();

    response.status(201).json({
      message: "Data added successfully",
      data: newInsuranceQuote,
    });
  } catch (error) {
    console.error("Error while adding quote:", error);
    response.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
