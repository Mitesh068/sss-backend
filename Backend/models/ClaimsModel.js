import mongoose from "mongoose";

const ClaimSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  product: {
    type: String,
    enum: ["Health", "Motor", "Travel", "Life"],
    default: "Health",
  },
  policyNumber: { type: String, required: true },
  message: { type: String, required: true },
  issuedBy: {
    type: String,
    enum: ["Yes", "No"],
    required: true, 
  },
});

const ClaimModel = mongoose.model('claims', ClaimSchema)

export default ClaimModel


