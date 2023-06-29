import { Schema, model } from "mongoose";

interface ProjectsSchemaType {
  rank: number;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  type: string;
  imageLink: string;
  techStack: string[];
}

const projectsSchema: Schema<ProjectsSchemaType> =
  new Schema<ProjectsSchemaType>({
    rank: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    githubLink: { type: String, required: true, default: "" },
    liveLink: { type: String, required: true, default: "" },
    type: { type: String, required: true },
    imageLink: { type: String, required: true },
    techStack: { type: [String], required: true },
  });

export const Projects = model<ProjectsSchemaType>("Projects", projectsSchema);
