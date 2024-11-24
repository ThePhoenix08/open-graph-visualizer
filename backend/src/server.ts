import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/connectDB.js";
import metadataRouter from "./routers/metadata.routes.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";

dotenv.config();

const port: string | number = process.env.PORT || 5000;
const API_Base: string = "/api/v1";

const app: Application = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get(`${API_Base}/healthCheck`, (req: Request, res: Response) => {
  res.send("Healthy");
});

app.use(`${API_Base}/metadata`, metadataRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
