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
const mongoose_1 = __importDefault(require("mongoose"));
const projects_1 = require("./models/projects");
const achievements_1 = require("./models/achievements");
const experiences_1 = require("./models/experiences");
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.status(200).send("Up and running");
});
app.get("/get-all-projects", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield projects_1.Projects.find({}).sort({ rank: -1 });
    res.status(200).send(response);
}));
app.get("/get-all-achievements", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield achievements_1.Achievements.find({}).sort({ rank: -1 });
    res.status(200).send(response);
}));
app.get("/get-all-experiences", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield experiences_1.Experiences.find({}).sort({ rank: -1 });
    res.status(200).send(response);
}));
mongoose_1.default
    .connect("mongodb+srv://oplondhe:Bhargavi@cluster0.mgslp9k.mongodb.net/portfolio?retryWrites=true&w=majority")
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
