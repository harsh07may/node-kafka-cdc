import { publishUserEvent } from "@/common/kafka";
import { generateUUID } from "@/common/utils";

export type User = {
    id: string;
    name: string;
    isActive: boolean;
    createdAt: Date;
};

const USERS: User[] = [
    {
        id: "1",
        name: "user",
        isActive: true,
        createdAt: new Date(),
    },
    {
        id: "2",
        name: "user2",
        isActive: true,
        createdAt: new Date(),
    },
];

export async function getAllActiveUsers() {
    return USERS.filter(u => u.isActive);
}

export async function getActiveUserById(id: string) {
    return USERS.find(u => u.id === id && u.isActive);
}

export async function createNewUser(
    payload: Omit<User, "id" | "createdAt">
) {
    const user: User = {
        id: generateUUID(),
        createdAt: new Date(),
        ...payload,
    };

    USERS.push(user);
    await publishUserEvent("USER_CREATED", user);

    return user;
}


