import express,{Request,Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
const app=express();
const PORT =8000;

import "dotenv/config";
import path from "path";
import userRoutes from "./routes/user.route";
import authRoutes from "./routes/auth.route";
import myStationsRoutes from "./routes/my-stations.route";
import stationRoutes from "./routes/stations.route";
import cookieParser from "cookie-parser";




app.use(cookieParser())
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
app.use(express.urlencoded({extended:true}))
app.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        credentials: true, //allows cookies to be sent with requests
    }
));
app.use(express.static(path.join(__dirname,"../../frontend/dist")));


app.get("/api/test",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"hiii from server side"
    })
})

//routes

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/my-stations",myStationsRoutes);
app.use("/api/stations",stationRoutes)






app.listen(PORT,()=>{
    dbconnect();
    console.log(`Server is running on port ${PORT}`);
})

