import dotenv from "dotenv";

dotenv.config();

export const isAdmin = async (password: string): Promise<boolean> => {
  const correctPassword = process.env.PASSWORD_ADMIN_SECRET as string; // Senha para acesso

  if (!correctPassword) {
    throw new Error("Senha de administrador não configurada.");
  }

  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(password === correctPassword);
    }, 1000); // Simula atraso
  });
};
