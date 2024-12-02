"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Carrega o componente App de forma dinâmica, apenas se o usuário for admin
const AdminApp = dynamic(() => import("./app"), { ssr: false });

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");

    // Verifica o status de admin armazenado no localStorage
    if (adminStatus === "true") {
      setIsAdmin(true);
    } else {
      router.push("/verificarAdmin"); // Redireciona para a página de login se não for admin
    }
  }, [router]);

  if (!isAdmin) {
    return null; // Enquanto não estiver autenticado, não exibe nada
  }

  return <AdminApp />; // Exibe a área admin se o usuário for admin
};

export default AdminPage;
