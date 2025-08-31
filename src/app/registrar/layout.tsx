// src/app/dashboard/layout.tsx
import React from "react";
import { Footer } from "@/components/footer";
import { ClientThemeProviderWrapper } from "@/components/ClientThemeProviderWrapper";

export default function RegistrarLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <ClientThemeProviderWrapper>
        <main className="flex-1">{children}</main>
        <Footer />
      </ClientThemeProviderWrapper>
    </div>
  );
}