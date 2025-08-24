export function Sidebar() {
    return (
    <aside className="w-64 bg-[#D1ECF1] h-screen text-bold transition-transform -translate-x-full sm:translate-x-0 shadow-lg">
            <div className="p-4 flex items-center justify-between border-b border-gray-700">
                <h1 className="text-lg font-bold">Usuario</h1>
                <button className="sm:hidden p-2 text-gray-300 hover:bg-gray-700 rounded-lg">
                ✖
                </button>
            </div>

            <nav className="p-4">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#B6FAFA]">
                        🏦 <span>Principal</span> 
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#B6FAFA]">
                        💵 <span>Añadir Transaccion</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#B6FAFA]">
                        📊 <span>Ver Reportes</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="absolute bottom-0 w-64 p-4 border-t border-gray-700">
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
                ⚙️ Configuración
                </button>
            </div>
        </aside>
    )
}

