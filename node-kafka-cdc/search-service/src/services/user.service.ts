
type UserIndex = {
    id: string;
    name: string;
    isActive: boolean;
    lastIndexedAt: Date;
};

const USERS: UserIndex[] = [
    {
        id: "1",
        name: "user",
        isActive: true,
        lastIndexedAt: new Date(),
    },
    {
        id: "2",
        name: "user2",
        isActive: true,
        lastIndexedAt: new Date(),
    },
];


export async function getActiveUserByName(name: string) {
    return USERS.find(
        u => u.name.toLowerCase().includes(name.toLowerCase()) && u.isActive);
}


