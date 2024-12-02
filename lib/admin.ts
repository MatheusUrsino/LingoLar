export const isAdmin = async (password: string): Promise<boolean> => {
  const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD; // Obtém a senha do .env
  
    const loginSuccess = await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        if (password === correctPassword) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  
    // Armazena no localStorage o estado da autenticação
    if (loginSuccess) {
      localStorage.setItem("isAdmin", "true");
    } else {
      localStorage.setItem("isAdmin", "false");
    }
  
    return loginSuccess;
  };
  
