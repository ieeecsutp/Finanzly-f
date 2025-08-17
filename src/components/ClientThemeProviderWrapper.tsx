"use client";

import { ThemeProviderWrapper } from "./ThemeProviderWrapper";

export function ClientThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProviderWrapper>{children}</ThemeProviderWrapper>;
}
