export const isAdmin = async (password: string): Promise<boolean> => {
    const correctPassword = "123"; // Senha para acesso
  
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
  
