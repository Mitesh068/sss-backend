import express from "express";
import { createClaim } from "../controllers/ClaimsController.js";

const ClaimRouter = express.Router()

ClaimRouter.post('/register-claim', createClaim)

export default ClaimRouter