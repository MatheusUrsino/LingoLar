"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isAdmin } from "@/lib/admin";

const AdminLoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await isAdmin(password);

    if (success) {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin");
    } else {
      localStorage.setItem("isAdmin", "false");
      setError("Senha incorreta. Tente novamente.");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-sm w-full bg-white rounded shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">Área Restrita</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
