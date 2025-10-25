import mongoose from "mongoose";


const QuoteSchema = new mongoose.Schema({
    name: { type:String, required: true },
    mobile: { type:String, required: true }
})

const QuoteModel = mongoose.model('Quote', QuoteSchema)

export default QuoteModel