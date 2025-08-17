// pages/forgotpassword.tsx

import { useState } from "react";
// Ajusta la ruta según dónde tengas tus componentes Shadcn UI
import { Button } from "../components/ui/button";
import Head from "next/head";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí llamas a tu API o lógica para cambiar la contraseña
    alert(`Se enviará un email a ${email} para cambiar la contraseña.`);
  };

  return (
    <>
      <Head>
        <title>Finanzly - Cambiar contraseña</title>
      </Head>

      <main className="bg-blue-200 min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="relative z-10 bg-white/90 rounded-xl shadow-2xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Cambiar contraseña
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="email" className="text-gray-700 block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => window.location.href = "/login"}
              >
                Volver
              </Button>

              <Button type="submit">Cambiar contraseña</Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
