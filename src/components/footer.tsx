import { Icons } from "@/components/icons"; // Asegúrate de exportarlo correctamente

export function Footer() {
  return (
    <footer id="contacto" className="bg-white dark:bg-background p-8 mt-12 border-t border-gray-200 dark:border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Columna 1: Logo + Redes */}
        <div>
          <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-foreground">💰Finanzly</h3>
          <Icons />
        </div>

        {/* Columna 2: Enlaces */}
        <div>
          <h4 className="font-semibold text-gray-700 dark:text-muted-foreground mb-3">Enlaces</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-muted">
            <li>
              <a href="/#nosotros" className="hover:underline">Nosotros</a>
            </li>
            <li>
              <a href="/#blog" className="hover:underline">Blog</a>
            </li>
            <li>
              <a href="/#recursos" className="hover:underline">Recursos</a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Legal */}
        <div>
          <h4 className="font-semibold text-gray-700 dark:text-muted-foreground mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-muted">
            <li>
              <a href="/terminos" className="hover:underline">Términos y Condiciones</a>
            </li>
            <li>
              <a href="/privacidad" className="hover:underline">Política de Privacidad</a>
            </li>
            <li>
              <a href="/colores" className="hover:underline">Colores</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
