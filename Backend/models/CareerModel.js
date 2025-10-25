import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    resume: {
      type: String, 
      required: true,
    },
  },
  { timestamps: true }
);

const CareerModel =  mongoose.model("Career", CareerSchema);

export default CareerModel
