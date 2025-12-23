import { getUser } from "@/controllers/user.controller";
import { Router } from "express";

const router = Router();

router.get("/search", getUser);

export default router;