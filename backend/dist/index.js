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
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 8000;
require("dotenv/config");
const user_route_1 = __importDefault(require("./routes/user.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const my_stations_route_1 = __importDefault(require("./routes/my-stations.route"));
const stations_route_1 = __importDefault(require("./routes/stations.route"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
app.use((0, cookie_parser_1.default)());
//database connection
const dbconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("Database connected successfully");
    }
    catch (error) {
        console.error("Database connection failed:", error);
    }
});
//uses
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true, //allows cookies to be sent with requests
}));
app.get("/", (req, res) => {
    res.status(200).json({
        message: "hiii from server side"
    });
});
//routes
app.use("/api/users", user_route_1.default);
app.use("/api/auth", auth_route_1.default);
app.use("/api/my-stations", my_stations_route_1.default);
app.use("/api/stations", stations_route_1.default);
app.listen(PORT, () => {
    dbconnect();
    console.log(`Server is running on port ${PORT}`);
});
