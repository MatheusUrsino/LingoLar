export const isAdmin = async (password: string): Promise<boolean> => {
  const correctPassword = process.env.CLERK_SECRET_KEY; // Variável privada sem o prefixo `NEXT_PUBLIC_`

  if (password === correctPassword) {
    // Quando o login for bem-sucedido, armazene a informação no `localStorage` no lado do cliente
    if (typeof window !== "undefined") {
      // Verifica se estamos no lado do cliente antes de usar o localStorage
      localStorage.setItem("isAdmin", "true");
    }
    return true;
  } else {
    if (typeof window !== "undefined") {
      // Verifica se estamos no lado do cliente antes de usar o localStorage
      localStorage.setItem("isAdmin", "false");
    }
    return false;
  }
};
