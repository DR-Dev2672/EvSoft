"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const stationSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        }
    },
    status: {
        type: String,
        required: true,
        enum: ["Active", "Inactive"]
    },
    powerOutput: {
        type: Number,
        required: true,
    },
    connectorType: {
        type: String,
        required: true,
        enum: ["Type1", "Type2", "CCS", "CHAdeMO"]
    }
});
// stationSchema.pre("save", async function (next) {
//   next();
// });
const Station = mongoose_1.default.model("Station", stationSchema);
exports.default = Station;
