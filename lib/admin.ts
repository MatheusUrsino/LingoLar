import { auth } from '@clerk/nextjs/server'

const allowedIds = [
    "user_2onwE7iHoPdJeHRGX9dqbt87N0L",
]

export const isAdmin = async () => {
    const { userId } = await auth();

    if (!userId) {
        return false;
    }

    return allowedIds.indexOf(userId) !== -1;
}
