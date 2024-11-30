import { auth } from "@clerk/nextjs/server";

const adminIds = [
    "user_2onwE7iHoPdJeHRGX9dqbt87N0L",
];

export const isAdmin = async () => {
    const { userId } = await auth(); // Espera a Promise ser resolvida

    if (!userId) {
        return false; // Retorna false se o userId não estiver presente
    }

    return adminIds.indexOf(userId) !== -1; // Verifica se o userId está na lista de admins
}
