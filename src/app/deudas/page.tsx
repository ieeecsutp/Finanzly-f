import Head from "next/head";
import Link from "next/link";
import { Button } from "../../components/ui/button"; 

export default function Deudas() {
  return (
    <>
      <Head>
        <title>Finanzly - Guía para Salir de Deudas</title>
      </Head>

      <main className="font-sans text-gray-800 flex flex-col items-center justify-center min-h-screen bg-red-50 p-4">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full text-center">
          <h2 className="text-3xl font-bold mb-6 text-red-800">
            Guía para Salir de Deudas
          </h2>
          <p className="text-gray-700 mb-6">
            Eliminar tus deudas es un paso crucial hacia la libertad financiera. Esta guía te proporcionará estrategias prácticas para tomar el control y salir de ellas de forma efectiva.
          </p>

          <div className="space-y-6 text-left">
            <section>
              <h3 className="text-xl font-semibold text-red-700 mb-2">Estrategias Clave:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Método Bola de Nieve: Paga primero las deudas más pequeñas para ganar impulso y motivación.</li>
                <li>Método Avalancha: Enfócate en las deudas con la tasa de interés más alta para ahorrar dinero a largo plazo.</li>
                <li>Consolidación de Deudas: Considera un préstamo o una tarjeta de crédito con intereses más bajos para unificar tus pagos.</li>
                <li>Negociación con Acreedores: A veces, es posible negociar planes de pago o reducciones de deuda.</li>
                <li>Aumento de Ingresos: Busca formas adicionales de ganar dinero para acelerar el pago.</li>
                <li>Reducción de Gastos: Identifica y recorta gastos innecesarios para liberar más fondos para tus deudas.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-red-700 mb-2">Pasos para Empezar:</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Haz una lista de todas tus deudas: monto, tasa de interés, pago mínimo.</li>
                <li>Elige una estrategia que se adapte a tu situación.</li>
                <li>Crea un presupuesto estricto y asigna la mayor cantidad posible al pago de deudas.</li>
                <li>Mantente consistente y celebra cada pequeño avance.</li>
              </ol>
            </section>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              ¡Recuerda que cada paso cuenta en el camino hacia una vida sin deudas!
            </p>
            <Link href="/">
              <Button variant="outline">← Volver a Inicio</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
