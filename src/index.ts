import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { Projects } from "./models/projects";
import { Achievements } from "./models/achievements";
import { Experiences } from "./models/experiences";
// import path from "path";

const app: Express = express();
const port = 3000;

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

// if (process.env.NODE_ENV === "development") {
// app.use(express.static(path.join(__dirname, "../../frontend", "build")));
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../frontend", "build", "index.html"));
// });
// }

mongoose
  .connect(
    "mongodb+srv://oplondhe:Bhargavi@cluster0.mgslp9k.mongodb.net/portfolio?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
