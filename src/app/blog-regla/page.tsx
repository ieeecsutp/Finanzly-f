export default function BlogReglaPage() {
  return (
    <main className="font-sans text-gray-800 p-4 py-16 bg-pink-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <img
          src="/imagenes/blog2.png"
          alt="Imagen de la regla 50-30-20"
          className="w-full h-auto rounded-lg mb-6 object-cover max-h-96"
          loading="lazy"
        />
        <h1 className="text-4xl font-bold mb-4 text-center text-pink-800">
          La regla 50-30-20: tu aliada para manejar el dinero
        </h1>
        <p className="text-gray-600 text-sm mb-6 text-center">Publicado el 19 de junio de 2025</p>

        <article className="prose max-w-none text-left">
          <p className="mb-4">
            La regla 50-30-20 es una de las estrategias de presupuesto personal más populares y sencillas para distribuir tus ingresos mensuales.
            Es una guía flexible que te ayuda a mantener el control de tu dinero sin sentirte demasiado restringido.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-pink-700">¿En qué consiste la regla 50-30-20?</h2>
          <p className="mb-4">
            La regla sugiere dividir tu ingreso neto (después de impuestos) en tres categorías principales:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li><strong>50% para Necesidades:</strong> Son los gastos esenciales y no negociables que necesitas para vivir.
              Esto incluye vivienda (alquiler/hipoteca), servicios públicos (agua, luz, gas, internet), transporte básico,
              alimentos (comida casera), seguros y pagos mínimos de deudas (tarjetas de crédito, préstamos estudiantiles).
              Si no pagas esto, tu calidad de vida se vería seriamente afectada.</li>
            <li><strong>30% para Deseos:</strong> Son los gastos no esenciales que mejoran tu calidad de vida y te traen disfrute.
              Aquí entran salir a comer, entretenimiento, hobbies, suscripciones a servicios de streaming, ropa nueva,
              vacaciones y cualquier otro gasto discrecional. Puedes vivir sin ellos, pero hacen la vida más agradable.</li>
            <li><strong>20% para Ahorro y Pago de Deudas:</strong> Esta parte de tu presupuesto se destina a construir
              tu seguridad financiera futura. Incluye aportes a tu fondo de emergencia, inversiones para el retiro,
              ahorro para metas a largo plazo (una casa, un coche) y pagos adicionales a deudas (más allá del mínimo)
              para acelerar su eliminación.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-pink-700">¿Cómo aplicar la regla?</h2>
          <ol className="list-decimal list-inside ml-4 mb-4">
            <li><strong>Calcula tu Ingreso Neto:</strong> Determina exactamente cuánto dinero recibes después de todas las deducciones.</li>
            <li><strong>Clasifica tus Gastos:</strong> Revisa tus gastos del último mes y asigna cada uno a una de las tres categorías.</li>
            <li><strong>Ajusta y Optimiza:</strong> Si tus porcentajes no se ajustan a la regla (por ejemplo, gastas más del 50% en necesidades), busca áreas donde puedas recortar o reasignar. Si gastas demasiado en deseos, busca formas de reducirlos para liberar más dinero para el ahorro.</li>
            <li><strong>Automatiza tus Ahorros:</strong> Configura transferencias automáticas a tu cuenta de ahorros o inversiones al inicio de cada mes para asegurar que el 20% se aparte primero.</li>
          </ol>

          <p className="mt-6 text-center text-lg font-medium text-pink-900">
            La regla 50-30-20 es una excelente base para empezar a organizar tus finanzas de manera efectiva. ¡Adóptala y observa cómo tu dinero trabaja para ti!
          </p>
        </article>

        <div className="mt-8 text-center">
          <a href="/#blog" className="text-blue-600 hover:underline">← Volver al Blog</a>
        </div>
      </div>
    </main>
  );
}
