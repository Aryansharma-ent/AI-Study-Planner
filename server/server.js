import express from 'express'
import dotenv from 'dotenv';
dotenv.config();

// Debug: Verify API key is loaded
console.log("Environment variables loaded:");
console.log("GEMINI_API_KEY exists:", !!process.env.GEMINI_API_KEY);
console.log("GEMINI_API_KEY length:", process.env.GEMINI_API_KEY?.length);

const app = express();
import cors from 'cors';
import ErrorHandler from './Middlewares/ErrorHandler.js';
import PlanData from './Routes/DataRouters.js';
import connectDB from './config/db.js';
connectDB();
app.use(cors());
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use('/api/plans',PlanData)
app.use(ErrorHandler)
app.listen(8000,()=>{
    console.log("Server started at.....8000");
})