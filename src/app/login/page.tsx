"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login con email: ${email} y contraseña: ${password}`);
  };

  return (
    <main className="bg-blue-200 min-h-screen flex items-center justify-center pt-10 px-4">
      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Bienvenido de nuevo
        </h1>

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
            />
          </div>

          <Button type="submit" className="w-full">
            Ingresar
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
