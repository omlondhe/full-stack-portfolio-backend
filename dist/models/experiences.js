"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experiences = void 0;
const mongoose_1 = require("mongoose");
const experiencesSchema = new mongoose_1.Schema({
    rank: { type: Number, required: true },
    logo: { type: String, required: true },
    name: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: [String], required: true, default: [] },
    skills: { type: [String], required: true, default: [] },
});
exports.Experiences = (0, mongoose_1.model)("Experiences", experiencesSchema);
