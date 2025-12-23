import { getUsers, getUser } from "@/controllers/user.controller";
import { Router } from "express";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);

export default router;