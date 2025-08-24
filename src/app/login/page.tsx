"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contraseña }),
      });

      const body = await res.json();
      if (!res.ok) {
        alert(body?.message || "Credenciales inválidas");
        setLoading(false);
        return;
      }

      // Guardar token y redirigir al dashboard
      if (body?.data?.token) {
        localStorage.setItem("token", body.data.token);
      }
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded shadow"
        aria-label="login-form"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Iniciar sesión
        </h2>

        <label className="block mb-3">
          <span className="text-sm text-gray-700">Correo</span>
          <input
            type="email"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2"
            placeholder="tucorreo@ejemplo.com"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm text-gray-700">Contraseña</span>
          <input
            type="password"
            required
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2"
            placeholder="********"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-60"
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </main>
  );
}
