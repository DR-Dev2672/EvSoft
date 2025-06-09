"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const express_validator_1 = require("express-validator");
const station_model_1 = __importDefault(require("../models/station.model"));
const router = express_1.default.Router();
router.post("/", auth_middleware_1.default, [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name is required"),
    (0, express_validator_1.body)("status")
        .isIn(["Active", "Inactive"])
        .withMessage("Status must be either Active or Inactive"),
    (0, express_validator_1.body)("location.latitude")
        .isFloat({ min: -90, max: 90 })
        .withMessage("Latitude must be between -90 and 90"),
    (0, express_validator_1.body)("location.longitude")
        .isFloat({ min: -180, max: 180 })
        .withMessage("Longitude must be between -180 and 180"),
    (0, express_validator_1.body)("powerOutput")
        .isFloat({ min: 0 })
        .withMessage("Power output must be a positive number"),
    (0, express_validator_1.body)("connectorType")
        .isIn(["Type1", "Type2", "CCS", "CHAdeMO"])
        .withMessage("Connector type must be one of Type1, Type2, CCS, or CHAdeMO"),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newStation = req.body;
        newStation.lastUpdated = new Date();
        newStation.userId = req.userId;
        const station = new station_model_1.default(newStation);
        yield station.save();
        res.status(201).send(station);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}));
router.get("/", auth_middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const station = yield station_model_1.default.find({ userId: req.userId });
        res.json(station);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching station" });
    }
}));
router.get("/:id", auth_middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id.toString();
    try {
        const station = yield station_model_1.default.findOne({
            _id: id,
            userId: req.userId,
        });
        res.json(station);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching stations" });
    }
}));
router.put("/:stationId", auth_middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedStation = req.body;
        updatedStation.lastUpdated = new Date();
        const station = yield station_model_1.default.findOneAndUpdate({
            _id: req.params.stationId,
            userId: req.userId,
        }, updatedStation, { new: true });
        if (!station) {
            return res.status(404).json({ message: "Station not found" });
        }
        res.status(201).json(station);
    }
    catch (error) {
        res.status(500).json({ message: "Something went throw" });
    }
}));
exports.default = router;
