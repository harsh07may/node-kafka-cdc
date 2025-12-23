import type { Request, Response } from "express";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import errorMiddleware from "./middlewares/error.middleware";
import routes from "./routes";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: process.env.APP_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded());
app.use(errorMiddleware);

// Routes
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
    res.send("Healthy");
});

export default app;