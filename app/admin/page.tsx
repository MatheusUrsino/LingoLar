'use client'
import { isAdmin } from "@/lib/admin";  // Importando o hook com o nome isAdmin
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = () => {
  const isAdminUser = isAdmin();  // Usando o hook isAdmin corretamente

  if (!isAdminUser) {
    redirect("/");  // Redireciona se não for admin
  }

  return <App />;
}

export default AdminPage;
