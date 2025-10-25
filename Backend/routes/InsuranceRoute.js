import express from "express";
import { InsuranceQuote } from "../controllers/InusranceController.js";


const InsuranceRouter = express.Router();

InsuranceRouter.post('/insurance-quotes', InsuranceQuote)

export default InsuranceRouter