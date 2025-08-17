"use client";

import { ThemeProvider } from "./theme-provider";

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
