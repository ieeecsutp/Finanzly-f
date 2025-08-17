import Link from "next/link";

export default function PresupuestoPage() {
  return (
      <main className="font-sans text-gray-800 flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-800">Presupuesto Mensual</h2>
          <p className="text-gray-700 mb-6">
            Una herramienta práctica que te ayuda a planificar y controlar tus ingresos y gastos cada mes.
            Tener un presupuesto es el primer paso para tomar el control de tus finanzas personales y alcanzar tus metas económicas.
          </p>

          <div className="space-y-4 text-left">
            <h3 className="text-xl font-semibold text-green-700">¿Por qué es importante un presupuesto?</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Identificar a dónde va tu dinero.</li>
              <li>Establecer metas de ahorro realistas.</li>
              <li>Reducir gastos innecesarios.</li>
              <li>Evitar deudas y vivir con mayor tranquilidad.</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-700">Pasos para crear tu presupuesto:</h3>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Calcula tus ingresos netos mensuales.</li>
              <li>Lista todos tus gastos fijos (alquiler, hipoteca, servicios, etc.).</li>
              <li>Registra tus gastos variables (comida, entretenimiento, transporte).</li>
              <li>Compara ingresos y gastos para identificar oportunidades de ahorro.</li>
              <li>Ajusta tus hábitos de gasto según tus metas.</li>
              <li>Revisa tu presupuesto regularmente.</li>
            </ol>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
                ¡Próximamente aquí podrás descargar plantillas interactivas o usar una herramienta para crear tu presupuesto!
            </p>
            <Link href="/" className="text-blue-600 hover:underline">
                ← Volver a Inicio
            </Link>
            </div>

        </div>
      </main>
  );
}
