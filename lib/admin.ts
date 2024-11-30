import { auth } from "@clerk/nextjs/server";

const adminIds = [
    "user_2onwE7iHoPdJeHRGX9dqbt87N0L", // IDs dos administradores
];

export const isAdmin = () => {
    const userId = auth();  // Obtém o ID do usuário

    if (!userId) {
        return false; // Retorna falso se não houver um ID de usuário
    }

    return adminIds.indexOf(userId.toString()) !== -1;  // Verifica se o ID do usuário está na lista de admin
}
