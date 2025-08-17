import Link from "next/link";
import { NavButton } from "@/components/nav-button";

export function Header() {
  return (
    <header className="bg-white dark:bg-background shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link
          href="/"
          className="px-2 py-1 hover:opacity-80 transition"
        >
          💰Finanzly
        </Link>
      </div>

      <nav className="flex items-center space-x-3">
        <Link href="/#nosotros" className="text-gray-700 dark:text-foreground hover:text-blue-600 px-2 py-1">
          Nosotros
        </Link>
        <Link href="/#blog" className="text-gray-700 dark:text-foreground hover:text-blue-600 px-2 py-1">
          Blog
        </Link>
        <Link href="/#recursos" className="text-gray-700 dark:text-foreground hover:text-blue-600 px-2 py-1">
          Recursos
        </Link>

        <NavButton 
          text="Iniciar Sesión" 
          href="/login" 
          variant="outline" 
        />
        <NavButton 
          text="Registrarse" 
          href="/signup" 
          variant="solid" 
        />
      </nav>
    </header>
  );
}
