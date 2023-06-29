"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const mongoose_1 = require("mongoose");
const projectsSchema = new mongoose_1.Schema({
    rank: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    githubLink: { type: String, required: true, default: "" },
    liveLink: { type: String, required: true, default: "" },
    type: { type: String, required: true },
    imageLink: { type: String, required: true },
    techStack: { type: [String], required: true },
});
exports.Projects = (0, mongoose_1.model)("Projects", projectsSchema);
