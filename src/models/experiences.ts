import { Schema, model } from "mongoose";

interface ExperiencesSchemaType {
  rank: number;
  logo: string;
  name: string;
  startDate: string;
  endDate: string;
  role: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiencesSchema: Schema<ExperiencesSchemaType> =
  new Schema<ExperiencesSchemaType>({
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

export const Experiences = model<ExperiencesSchemaType>(
  "Experiences",
  experiencesSchema
);
