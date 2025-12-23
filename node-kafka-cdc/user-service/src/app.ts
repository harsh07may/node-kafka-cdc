import type { Request, Response } from "express";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import errorMiddleware from "./middlewares/error.middleware";
import routes from "./routes";
import { connectProducer } from "./common/kafka";

import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

const app = express();

// Middlewares
app.use(morgan("dev"));
// app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded());
app.use(errorMiddleware);

connectProducer();

const swaggerOutput = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../swagger-output.json"), "utf8")
);

// 3. Serve the UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));

// Routes
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
    res.send("Healthy");
});

export default app;