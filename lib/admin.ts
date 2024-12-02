export const isAdmin = async (password: string): Promise<boolean> => {
  const correctPassword = "3nX6vL2yQ1zP9dJ8tM4kR5F0W7uA1Y6bV2L9mQ3W0F8X7pR5T1zK4J6hN9V0L2Q3Y4F7tM8kP9rL1X6W3dZ0"; // Variável privada sem o prefixo `NEXT_PUBLIC_`

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
