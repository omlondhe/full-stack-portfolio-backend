import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { Projects } from "./models/projects";
import { Achievements } from "./models/achievements";
import { Experiences } from "./models/experiences";

const app: Express = express();
app.use(express.static("public"));

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Up and running");
});

app.get("/get-all-projects", async (req: Request, res: Response) => {
  const response = await Projects.find({}).sort({ rank: -1 });
  res.status(200).send(response);
});

app.get("/get-all-achievements", async (req: Request, res: Response) => {
  const response = await Achievements.find({}).sort({ rank: -1 });
  res.status(200).send(response);
});

app.get("/get-all-experiences", async (req: Request, res: Response) => {
  const response = await Experiences.find({}).sort({ rank: -1 });
  res.status(200).send(response);
});

mongoose
  .connect(
    "mongodb+srv://oplondhe:Bhargavi@cluster0.mgslp9k.mongodb.net/portfolio?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
