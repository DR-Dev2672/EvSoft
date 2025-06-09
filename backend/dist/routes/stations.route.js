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
const app = (0, express_1.default)();
const router = express_1.default.Router();
const station_model_1 = __importDefault(require("../models/station.model"));
const express_validator_1 = require("express-validator");
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stations = yield station_model_1.default.find().sort("-lastUpdated");
        res.json(stations);
    }
    catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Error fetching stations" });
    }
}));
router.get("/:id", [(0, express_validator_1.param)("id").notEmpty().withMessage("Station ID is required")], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id.toString();
    try {
        const station = yield station_model_1.default.findById(id);
        res.json(station);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching station" });
    }
}));
exports.default = router;
