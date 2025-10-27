import express from "express";
import "dotenv/config"
import cors from 'cors'
import connectDB from "./configs/db.js";
import QuoteRouter from "./routes/QuoteRoutes.js";
import ContactRouter from "./routes/ContactRoute.js";
import InsuranceRouter from "./routes/InsuranceRoute.js";
import ClaimRouter from "./routes/ClaimRoute.js";
import CareerRouter from "./routes/CareerRoute.js";

const app = express()
await connectDB()

// middleware
app.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}))

app.use(express.json())

// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'))

app.get('/', (req,res) => res.send(`Server is Running on port ${process.env.PORT || 5000}`))
app.use('/api/quote', QuoteRouter)
app.use('/api/contact', ContactRouter)
app.use('/api/insurance', InsuranceRouter)
app.use('/api/claim', ClaimRouter)
app.use('/api/career',CareerRouter)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is live on the port ${PORT}`)
})