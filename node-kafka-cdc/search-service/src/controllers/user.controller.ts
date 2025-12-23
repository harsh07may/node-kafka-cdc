import { Request, Response } from "express";
import { getActiveUserByName } from "@/services/user.service";


export async function getUser(req: Request, res: Response) {
    try {
        const { name } = req.query;
        if (!name || typeof name !== "string")
            return res.status(400).json({ message: "name query is required" });


        const user = await getActiveUserByName(name);

        return res
            .status(200)
            .json({ success: true, message: "User retrieved successfully.", user });
    } catch {
        return res
            .status(500)
            .json({ success: false, message: "Failed to get user." });
    }
}