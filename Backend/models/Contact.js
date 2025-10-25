import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    message: {type: String, required: true}
})

const ContactModel = mongoose.model('Contact', ContactSchema)

export default ContactModel