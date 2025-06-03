import express ,{Request,Response} from "express";

const app=express();
const router=express.Router();
import Station from "../models/station.model"



router.get("/", async (req: Request, res: Response) => {
  try {
    const stations = await Station.find().sort("-lastUpdated");
    res.json(stations);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching stations" });
  }
});

export default router;