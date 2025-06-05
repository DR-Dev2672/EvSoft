import express ,{Request,Response} from "express";

const app=express();
const router=express.Router();
import Station from "../models/station.model"
import { param, validationResult } from "express-validator";



router.get("/", async (req: Request, res: Response) => {
  try {
    const stations = await Station.find().sort("-lastUpdated");
    res.json(stations);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching stations" });
  }
});

router.get(
  "/:id",
  [param("id").notEmpty().withMessage("Station ID is required")],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = req.params.id.toString();

    try {
      const station = await Station.findById(id);
      res.json(station);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching station" });
    }
  }
);

export default router;