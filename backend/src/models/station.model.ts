import mongoose from "mongoose";
import { StationType } from "../shared/types";

const stationSchema =new mongoose.Schema<StationType>({
 userId: {
    type: String,
     required: true
    },
 name:{
    type:String,
    required:true,
 },
 location:{
    latitude:{
        type:Number,
        required:true,
    },
    longitude:{
        type:Number,
        required:true,
    }
 },
 status:{
    type:String,
    required:true,
    enum:["Active","Inactive"]
 },
 powerOutput:{
    type:Number,
    required:true,
 },
    connectorType:{
        type:String,
        required:true,
        enum:["Type1","Type2","CCS","CHAdeMO"]
    }   
})

// stationSchema.pre("save", async function (next) {
//   next();
// });

const Station = mongoose.model<StationType>("Station", stationSchema);
export default Station;