"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Achievements = void 0;
const mongoose_1 = require("mongoose");
const achievementSchema = new mongoose_1.Schema({
    rank: { type: Number, required: true },
    text: { type: String, required: true },
    link: { type: String, required: true, default: "" },
    categories: { type: [String], required: true, default: [] },
});
exports.Achievements = (0, mongoose_1.model)("Achievements", achievementSchema);
