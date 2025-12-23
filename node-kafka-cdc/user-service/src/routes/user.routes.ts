import { getUsers, getUser, createUser } from "@/controllers/user.controller";
import { Router } from "express";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);

router.post("/",
    /* #swagger.parameters['body'] = {
            in: 'body',
            description: 'User information',
            required: true,
            schema: {
                name: "John Doe",
                isActive: true
            }
       } 
    */
    createUser
);

export default router;