// layout.tsx (server component)
import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/header"; // server component
import { Footer } from "@/components/footer"; // server component
import { ClientThemeProviderWrapper } from "@/components/ClientThemeProviderWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {/* Aquí envuelves con el provider client */}
        <ClientThemeProviderWrapper>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientThemeProviderWrapper>
      </body>
    </html>
  );
}
