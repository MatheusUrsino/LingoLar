import { auth } from "@clerk/nextjs/server";

const allowedIds = [
    "user_2onwE7iHoPdJeHRGX9dqbt87N0L", // IDs dos administradores
];

export const isAdmin = () => {
    const  userId = auth();
    const userIdString = userId.toString();

    if (!userId) {
        return false; // Retorna falso se não houver um ID de usuário
    }

    return allowedIds.indexOf(userIdString) !== -1;  // Verifica se o ID do usuário está na lista de admin
    
}
