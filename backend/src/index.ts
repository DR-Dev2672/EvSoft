import express,{Request,Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
const app=express();
const PORT =3000;
import "dotenv/config";
import path from "path";


//database connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
console.log("Database connected successfully");
app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"hiii from server side"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

