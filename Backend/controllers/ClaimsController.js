import ClaimModel from "../models/ClaimsModel.js";


export const createClaim = async (request, response) => {
  try {
    const { name, email, mobile, product, policyNumber, message, issuedBy } = request.body;

    const existingClaim = await ClaimModel.findOne({ email, policyNumber });
    if (existingClaim) {
      return response.status(400).json({ message: "Claim with this email & policy number already exists" });
    }

    const newClaim = new ClaimModel({
      name,
      email,
      mobile,
      product,
      policyNumber,
      message,
      issuedBy,
    });

    const savedClaim = await newClaim.save();
    response.status(201).json(savedClaim);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};