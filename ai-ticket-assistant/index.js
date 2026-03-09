import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// dotenv.config({
//     path: "\.env"
// })

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MonogDB connected successfully ✅")
        app.listen(PORT, () => console.log("🚀 Server is running at http://localhost:3000"))
    })
    .catch((err) => console.error("❌ MongoDB error: ", err))