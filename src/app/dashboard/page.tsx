import { Sidebar } from "@/components/sidebar"; 

export default function DashboardPage() {
  return(
    <main className="font-sans text-gray-800 bg-black-50 min-h-screen">
        <div className="flex">
        <Sidebar />
        <section className="flex-1 bg-gray-100 p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-xl shadow-md">
              <h2 className="text-lg font-semibold">💰 Balance Total</h2>
              <p className="text-2xl font-bold text-green-600 mt-2">s/2,500</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md">
              <h2 className="text-lg font-semibold">📉 Gastos Mensuales</h2>
              <p className="text-2xl font-bold text-red-500 mt-2">$1,200</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md">
              <h2 className="text-lg font-semibold">📈 Ingresos Mensuales</h2>
              <p className="text-2xl font-bold text-green-500 mt-2">$3,000</p>
            </div>

            <div className="lg:col-span-3 p-6 bg-white rounded-2xl shadow-md">
              <div className="p-4 rounded-xl bg-gray-50">
               a
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
               b
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
               c
              </div>
            </div>
          </div>
        </section>
        </div>

    
    </main>
  );
}
