"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // URL CORREGIDA: /login en lugar de /usuarios
      const response = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: email,
          contraseña: password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        
        if (result.status === "success") {
          // Guardar token - ajusta según tu estructura real
          if (result.data.access_token) {
            document.cookie = `token=${result.data.access_token}; path=/; max-age=86400`; // 1 día
          }

          // Redirigir
          const redirectUrl = result.data.redirectTo || "/dashboard";
          router.push(redirectUrl);
        } else {
          setError(result.message || "Error en el login");
        }
      } else {
        // Manejar errores HTTP
        const errorData = await response.json();
        setError(errorData.message || `Error: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-blue-200 min-h-screen flex items-center justify-center pt-10 px-4">
      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Bienvenido de nuevo
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-gray-700 block mb-1">
              E-mail
            </label>
            <Input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="text-gray-700 block mb-1">
              Contraseña
            </label>
            <Input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Ingresando..." : "Ingresar"}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            ¿No tienes cuenta?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Regístrate aquí
            </Link>
          </p>

          <p className="mt-4">
            <Link href="/forgotpassword" className="text-blue-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}