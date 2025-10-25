import express from "express";
import { Contact } from "../controllers/ContactController.js";


const ContactRouter = express.Router()

ContactRouter.post('/contact-us', Contact)

export default ContactRouter