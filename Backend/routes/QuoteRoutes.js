import express from "express";
import { GetQuote } from "../controllers/QuoteController.js";


const QuoteRouter = express.Router();

QuoteRouter.post('/quotes', GetQuote)

export default QuoteRouter