import express, { Request, Response } from "express";

import verifyToken from "../middlewares/auth.middleware";
import { body } from "express-validator";
import { StationType } from "../shared/types";
import Station from "../models/station.model";

const router = express.Router();


router.post(
  "/",
  verifyToken,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("status")
      .isIn(["Active", "Inactive"])
      .withMessage("Status must be either Active or Inactive"),
    body("location.latitude")
      .isFloat({ min: -90, max: 90 })
      .withMessage("Latitude must be between -90 and 90"),
    body("location.longitude")
      .isFloat({ min: -180, max: 180 })
      .withMessage("Longitude must be between -180 and 180"),
      body("powerOutput")
      .isFloat({ min: 0 })
      .withMessage("Power output must be a positive number"),
    body("connectorType")
      .isIn(["Type1", "Type2", "CCS", "CHAdeMO"])
    .withMessage("Connector type must be one of Type1, Type2, CCS, or CHAdeMO"),
    
  ],


  async (req: Request, res: Response) => {
    try {
       

      
      const newStation: StationType = req.body;
      newStation.lastUpdated = new Date();
      newStation.userId = req.userId;
      const station = new Station(newStation);
      await station.save();
      res.status(201).send(station);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const station = await Station.find({ userId: req.userId });
    res.json(station);
  } catch (error) {
    res.status(500).json({ message: "Error fetching station" });
  }
});

router.get("/:id", verifyToken, async (req: Request, res: Response) => {
  const id = req.params.id.toString();
  try {
    const station = await Station.findOne({
      _id: id,
      userId: req.userId,
    });
    
    res.json(station);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stations" });
  }
});

router.put(
  "/:stationId",
  verifyToken,
//   upload.array("imageFiles"),
  async (req: Request,res:Response) => {
    try {
      const updatedStation: StationType = req.body;
    //   updatedStation.lastUpdated = new Date();

      const station = await Station.findOneAndUpdate(
        {
          _id: req.params.stationId,
          userId: req.userId,
        },
        // updatedStation,
        { new: true }
      );

      if (!station) {
        return res.status(404).json({ message: "Station not found" });
      }

    //   const files = req.files as Express.Multer.File[];
    //   const updatedImageUrls = await uploadImages(files);

    //   hotel.imageUrls = [
    //     ...updatedImageUrls,
    //     ...(updatedHotel.imageUrls || []),
    //   ];

    //   await hotel.save();
      res.status(201).json(station);
    } catch (error) {
      res.status(500).json({ message: "Something went throw" });
    }
  }
);

// async function uploadImages(imageFiles: Express.Multer.File[]) {
//   const uploadPromises = imageFiles.map(async (image) => {
//     const b64 = Buffer.from(image.buffer).toString("base64");
//     let dataURI = "data:" + image.mimetype + ";base64," + b64;
//     const res = await cloudinary.v2.uploader.upload(dataURI);
//     return res.url;
//   });

//   const imageUrls = await Promise.all(uploadPromises);
//   return imageUrls;
// }

export default router;