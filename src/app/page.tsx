

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#D1ECF1' }} className="px-20">
        <div className="grid md:grid-cols-2 items-center space-x-6">
          {/* Columna texto centrado */}
          <div className="text-center px-4 md:px-20 py-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Finanzly</h1>
            <p className="text-xl md:text-3xl lg:text-4xl mb-6 text-gray-500">
              Ordena tus finanzas como un experto
            </p>
            <a
              href="#nosotros"
              className="inline-block text-sm sm:text-base md:text-xl bg-white border border-gray-300 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Descubre el rumbo →
            </a>
          </div>

          {/* Columna imagen */}
          <div className="space-x-4">
            <img
              src="/imagenes/persona1.png"
              alt="Gráfico financiero"
              className="w-full max-w-3xl h-auto object-contain rounded-lg mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Regla 50-30-20 */}
      <section id="nosotros" className="p-8 h-auto mx-auto px-12 justify-between">
        <div className="grid md:grid-cols-2 items-center">
          {/* Columna imagen */}
          <div>
            <img
              src="/imagenes/fondo1.png"
              alt="Gráfico financiero"
              className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Columna texto centrado */}
          <div className="px-10 space-y-6">
            <h2 className="text-2xl px-8 py-2 text-center font-bold mb-4">
              Finanzly: tu guía para dominar tus finanzas con la regla 50-30-20
            </h2>
            <p className="mb-4 px-5">
              Finanzly es un sitio web de educación financiera que te ayuda a desarrollar habilidades prácticas para manejar
              tu dinero y mejorar tu calidad de vida. Promovemos la regla 50-30-20, una guía simple para distribuir tus
              ingresos:
            </p>
            <ul className="list-disc list-inside mb-4 text-left inline-block px-5">
              <li>50% para necesidades básicas.</li>
              <li>30% para gustos y estilo de vida.</li>
              <li>20% para ahorro y deudas.</li>
            </ul>
            <p className="px-5">
              Con Finanzly, aprenderás a aplicar esta y otras estrategias para tener el control de tus finanzas y alcanzar
              tus metas.
            </p>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" style={{ backgroundColor: '#D1ECF1' }} className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Blog</h2>
        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Entrada 1 */}
          <div className="bg-pink-100 p-4 rounded-lg shadow flex flex-col md:flex-row gap-4 items-center">
            <img
              src="/imagenes/blog1.jpeg"
              alt="Presupuesto"
              className="w-full md:w-40 h-40 object-cover rounded"
              loading="lazy"
            />
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2">1. Cómo crear un presupuesto efectivo y fácil de seguir</h3>
              <p className="text-sm text-gray-700">
                Aprende a organizar tus ingresos y gastos mensuales para tener un mejor control de tu dinero y alcanzar
                tus metas financieras.
              </p>
              <a href="/blog-presupuesto" className="inline-block mt-3 bg-yellow-200 hover:bg-yellow-300 px-4 py-2 rounded">
                Leer más
              </a>
            </div>
          </div>

          {/* Entrada 2 */}
          <div className="bg-pink-100 p-4 rounded-lg shadow flex flex-col md:flex-row gap-4 items-center">
            <img
              src="/imagenes/blog2.png"
              alt="Regla 50-30-20"
              className="w-full md:w-40 h-40 rounded object-cover order-last md:order-first"
            />
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2">2. La regla 50-30-20: tu aliada para manejar el dinero</h3>
              <p className="text-sm text-gray-700">
                Descubre cómo distribuir tus ingresos de forma sencilla para cubrir necesidades, disfrutar y ahorrar sin
                complicaciones.
              </p>
              <a href="/blog-regla" className="inline-block mt-3 bg-yellow-200 hover:bg-yellow-300 px-4 py-2 rounded">
                Leer más
              </a>
            </div>
          </div>

          {/* Entrada 3 */}
          <div className="bg-pink-100 p-4 rounded-lg shadow flex flex-col md:flex-row gap-4 items-center">
            <img
              src="/imagenes/blog3.jpeg"
              alt="Fondo de emergencia"
              className="w-full md:w-40 h-40 rounded object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2">3. La importancia de un fondo de emergencia</h3>
              <p className="text-sm text-gray-700">
                Conoce por qué ahorrar para imprevistos es clave para mantener tu estabilidad financiera ante cualquier
                situación inesperada.
              </p>
              <a href="/blog-fondo" className="inline-block mt-3 bg-yellow-200 hover:bg-yellow-300 px-4 py-2 rounded">
                Leer más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Financieros */}
      <section id="recursos" className="bg-blue-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Recursos Financieros</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="/presupuesto"
            className="block bg-white p-4 rounded shadow hover:shadow-lg transition duration-200 ease-in-out"
          >
            <div className="h-32 rounded mb-2 overflow-hidden flex items-center justify-center text-4xl text-green-500 font-bold">
              <img
                src="/imagenes/presupuesto.png"
                alt="Icono de presupuesto mensual"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="font-bold mb-1">Presupuesto mensual</h3>
            <p className="text-sm text-gray-600">
              Una herramienta práctica que te ayuda a planificar y controlar tus ingresos y gastos cada mes.
            </p>
            <p className="text-blue-600 text-sm mt-2">Ir al presupuesto →</p>
          </a>

          <a
            href="/calculadora"
            className="block bg-white p-4 rounded shadow hover:shadow-lg transition duration-200 ease-in-out"
          >
            <div className="h-32 bg-gray-100 rounded mb-2 flex items-center justify-center text-4xl text-blue-500 font-bold">
              <img
                src="/imagenes/calculadora.png"
                alt="Icono de calculadora de ahorro"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="font-bold mb-1">Calculadora de ahorro</h3>
            <p className="text-sm text-gray-600">
              Esta calculadora te permite estimar cuánto dinero puedes ahorrar en un periodo determinado.
            </p>
            <p className="text-blue-600 text-sm mt-2">Ir a la calculadora →</p>
          </a>

          <a
            href="/deudas"
            className="block bg-white p-4 rounded shadow hover:shadow-lg transition duration-200 ease-in-out"
          >
            <div className="h-32 rounded mb-2 overflow-hidden flex items-center justify-center text-4xl text-red-500 font-bold">
              <img
                src="/imagenes/deudas.png"
                alt="Icono de guía para salir de deudas"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="font-bold mb-1">Guía para salir de deudas</h3>
            <p className="text-sm text-gray-600">
              Un manual paso a paso con estrategias para reducir y eliminar tus deudas.
            </p>
            <p className="text-blue-600 text-sm mt-2">Ir a la guía →</p>
          </a>
        </div>
      </section>
      </>
  );
}
