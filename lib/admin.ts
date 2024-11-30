import { auth } from "@clerk/nextjs/server";

const adminIds = [
    "user_2onwE7iHoPdJeHRGX9dqbt87N0L",
];

export const isAdmin = () => {
    const  userId = auth();
    const userIdString = userId.toString();

    if (!userId) {
        return false
    }

    return adminIds.indexOf(userIdString) !== -1
}