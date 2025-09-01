// app/forgot-password/page.tsx (para App Router)

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head'; // Importar Head desde next/head

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Aquí iría la lógica para manejar el cambio de contraseña
      // Por ejemplo, una llamada a tu API
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Redirigir o mostrar mensaje de éxito
        alert('Se ha enviado un enlace de recuperación a tu email');
      } else {
        alert('Error al procesar la solicitud');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Cambiar Contraseña</title>
        <meta name="description" content="Recuperar contraseña" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-blue-200 flex items-center justify-center pt-16">
        {/* Contenedor del formulario */}
        <div className="register-container relative z-10 bg-white/90 rounded-xl shadow-2xl p-8 w-full max-w-md mx-4">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Cambiar contraseña
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4 mt-5">
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Ingresa tu email"
              />
            </div>

            {/* Botones */}
            <div className="text-center mt-6 space-x-4">
              <button
                type="button"
                onClick={handleGoBack}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Volver
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                {isLoading ? 'Procesando...' : 'Cambiar contraseña'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}