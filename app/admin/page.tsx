import { isAdmin } from "@/lib/admin";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

// Importar o componente client-side (AppClient)
const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = async () => {
  const admin = await isAdmin(); // Verifica se o usuário é admin

  if (!admin) {
    redirect("/"); // Redireciona para a página principal caso não seja admin
  }

  return <App />;
};

export default AdminPage;
