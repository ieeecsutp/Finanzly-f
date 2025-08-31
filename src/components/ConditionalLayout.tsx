// src/components/ConditionalLayout.tsx
"use client"; // Muy importante: Esto lo convierte en un Componente de Cliente

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import React from "react";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  // 1. Usamos el hook usePathname para obtener la ruta actual de forma segura
  const pathname = usePathname();

  // 2. Definimos las rutas donde NO queremos el header/footer
  const noHeaderPaths = ["/dashboard", "/registrar"];


  // 3. La misma lógica de antes, pero ahora con el hook
  const showHeader = !noHeaderPaths.some(path => pathname.startsWith(path));

  return (
    <>
      {/* El Header (y Footer) solo se muestra si la condición se cumple */}
      {showHeader && <Header />}
      
      <main className="flex-1">{children}</main>
      
      {showHeader && <Footer />}
    </>
  );
}