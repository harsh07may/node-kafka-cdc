import { Router } from "express";
import UserRouter from "./user.routes";

const BaseRouter = Router();

BaseRouter.use("/user", UserRouter);

export default BaseRouter;