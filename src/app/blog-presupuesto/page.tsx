export default function BlogPresupuestoPage() {
  return (
    <main className="font-sans text-gray-800 p-4 py-16 bg-pink-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <img
          src="/imagenes/blog1.jpeg"
          alt="Imagen de un presupuesto"
          className="w-full h-auto rounded-lg mb-6 object-cover max-h-96"
          loading="lazy"
        />
        <h1 className="text-4xl font-bold mb-4 text-center text-pink-800">
          Cómo crear un presupuesto efectivo y fácil de seguir
        </h1>
        <p className="text-gray-600 text-sm mb-6 text-center">Publicado el 02 de junio de 2025</p>

        <article className="prose max-w-none text-left">
          <p className="mb-4">
            Un presupuesto es una hoja de ruta financiera que te ayuda a entender a dónde va tu dinero y a tomar decisiones
            informadas sobre cómo gastarlo y ahorrarlo. No es una restricción, sino una herramienta de empoderamiento
            para alcanzar tus metas financieras.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-pink-700">Paso 1: Calcula tus Ingresos Netos</h2>
          <p className="mb-4">
            Comienza por identificar cuánto dinero ingresa a tu hogar después de impuestos y deducciones. Esto incluye salarios,
            ingresos por trabajos secundarios, pensiones, etc.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-pink-700">Paso 2: Clasifica tus Gastos</h2>
          <p className="mb-4">
            Divide tus gastos en dos categorías principales:
            <ul className="list-disc list-inside ml-4 mb-2">
              <li><strong>Gastos Fijos:</strong> Aquellos que son constantes cada mes (alquiler/hipoteca, servicios básicos, seguros, pagos de préstamos, suscripciones).</li>
              <li><strong>Gastos Variables:</strong> Aquellos que fluctúan (comida, entretenimiento, transporte, ropa, ocio).</li>
            </ul>
            Es crucial registrar todos tus gastos, incluso los pequeños "gastos hormiga". Puedes usar una app, una hoja de cálculo o un cuaderno.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-pink-700">Paso 3: Establece Metas Financieras</h2>
          <p className="mb-4">
            ¿Qué quieres lograr con tu dinero? Puede ser pagar una deuda, ahorrar para un coche, unas vacaciones, un fondo de emergencia o la jubilación.
            Tus metas deben ser específicas, medibles, alcanzables, relevantes y con un plazo definido (SMART).
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-pink-700">Paso 4: Asigna tu Dinero (Regla 50-30-20)</h2>
          <p className="mb-4">
            Una estrategia popular es la regla 50-30-20:
            <ul className="list-disc list-inside ml-4 mb-2">
              <li><strong>50% para Necesidades:</strong> Vivienda, servicios, transporte esencial, comida básica.</li>
              <li><strong>30% para Deseos:</strong> Comer fuera, entretenimiento, hobbies, vacaciones, suscripciones no esenciales.</li>
              <li><strong>20% para Ahorro y Pago de Deudas:</strong> Fondo de emergencia, inversiones, deudas (aparte de la hipoteca si es un gasto fijo).</li>
            </ul>
            Ajusta estos porcentajes según tu situación, pero úsalos como una guía para empezar.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-pink-700">Paso 5: Revisa y Ajusta Regularmente</h2>
          <p className="mb-4">
            Un presupuesto no es algo que se crea una vez y se olvida. Revísalo al menos una vez al mes para ver si estás cumpliendo tus metas,
            si tus hábitos de gasto han cambiado o si tus ingresos han variado. Haz los ajustes necesarios.
          </p>

          <p className="mt-6 text-center text-lg font-medium text-pink-900">
            ¡Crear un presupuesto es el primer y más poderoso paso hacia la libertad financiera!
          </p>
        </article>

        <div className="mt-8 text-center">
          <a href="/#blog" className="text-blue-600 hover:underline">← Volver al Blog</a>
        </div>
      </div>
    </main>
  );
}
