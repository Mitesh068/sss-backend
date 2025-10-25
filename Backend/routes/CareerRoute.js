import express from "express";
import { createCareer } from "../controllers/CareerController.js";
import upload from "../middleware/upload.js";


const CareerRouter = express.Router();

CareerRouter.post("/job", upload.single("resume"), createCareer);

export default CareerRouter;
