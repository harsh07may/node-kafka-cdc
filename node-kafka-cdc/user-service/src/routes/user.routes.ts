import { getUsers, getUser, createUser } from "@/controllers/user.controller";
import { Router } from "express";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);

export default router;