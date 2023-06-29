import { Schema, model } from "mongoose";

interface AchievementsSchemaType {
  rank: number;
  text: string;
  link: string;
  categories: string[];
}

const achievementSchema: Schema<AchievementsSchemaType> =
  new Schema<AchievementsSchemaType>({
    rank: { type: Number, required: true },
    text: { type: String, required: true },
    link: { type: String, required: true, default: "" },
    categories: { type: [String], required: true, default: [] },
  });

export const Achievements = model<AchievementsSchemaType>(
  "Achievements",
  achievementSchema
);
