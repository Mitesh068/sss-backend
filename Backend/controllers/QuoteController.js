import QuoteModel from "../models/Quote.js";

export const GetQuote = async (request, response) => {
  const { name, mobile } = request.body;

  try {
    if (!name || !mobile) {
      return response.status(400).json({ message: "Name and mobile number are required" });
    }

    const newQuote = new QuoteModel({
      name,
      mobile, 
    });

    await newQuote.save();

    response.status(201).json({
      message: "Quote request added successfully",
      data: newQuote,
    });
  } catch (error) {
    console.error("Error while adding quote:", error);
    response.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
