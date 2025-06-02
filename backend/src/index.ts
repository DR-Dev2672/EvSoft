import express,{Request,Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
const app=express();
const PORT =8000;
import "dotenv/config";
import path from "path";
import userRoutes from "./routes/user.route";
import cookieParser from "cookie-parser";




//database connection
const dbconnect =async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string );
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        
    }
}





//uses
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))

app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"hiii from server side"
    })
})

//routes

app.use("/api/users",userRoutes);






app.listen(PORT,()=>{
    dbconnect();
    console.log(`Server is running on port ${PORT}`);
})

