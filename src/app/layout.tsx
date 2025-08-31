// src/app/layout.tsx (¡MODIFICADO Y MÁS SIMPLE!)

import type { Metadata } from "next";
import "./globals.css";

// 1. Importa tu nuevo componente
import { ConditionalLayout } from "@/components/ConditionalLayout";
import { ClientThemeProviderWrapper } from "@/components/ClientThemeProviderWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ClientThemeProviderWrapper>
          {/* 2. Usa el nuevo componente para envolver a los 'children' */}
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </ClientThemeProviderWrapper>
      </body>
    </html>
  );
}