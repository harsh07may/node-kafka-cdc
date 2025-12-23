import { Request, Response } from "express";
import { getAllActiveUsers, getActiveUserById, User, createNewUser } from "@/services/user.service";

export async function getUsers(req: Request, res: Response) {
    try {

        const posts = await getAllActiveUsers();

        return res
            .status(200)
            .json({ success: true, message: "Users retrieved successfully.", posts });
    } catch {
        return res
            .status(500)
            .json({ success: false, message: "Failed to get Users." });
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const user = await getActiveUserById(id);

        if (!user)
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });


        return res
            .status(200)
            .json({ success: true, message: "User retrieved successfully.", user });
    } catch {
        return res
            .status(500)
            .json({ success: false, message: "Failed to get user." });
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        const newUser = req.body as Omit<User, "id" | "createdAt">;
        await createNewUser(newUser);

        return res
            .status(201)
            .json({ success: true, message: "User created successfully." });
    } catch {
        return res
            .status(500)
            .json({ success: false, message: "Failed to create user." });
    }
}