import { useAuth } from "@clerk/nextjs";

const allowedIds = [
    "user_2onwE7iHoPdJeHRGX9dqbt87N0L", // IDs dos administradores
];

// A função é agora um hook, mas será exportada como isAdmin
export const useIsAdmin = () => {  // Hooks devem começar com "use"
    const { userId } = useAuth();

    if (!userId) {
        return false; // Retorna falso se não houver um ID de usuário
    }

    return allowedIds.indexOf(userId) !== -1; // Verifica se o ID do usuário está na lista de admin
};

// Exportando com o nome "isAdmin" para manter a compatibilidade
export const isAdmin = useIsAdmin;
