'use client';

import { Sidebar } from "@/components/sidebar"; 
import React, { useState } from 'react';
import { PlusCircle, DollarSign, FileText } from 'lucide-react';

export default function RegistrarPage() {
  const [formData, setFormData] = useState({
    tipo: '',
    idCategoria: '',
    descripcion: '',
    monto: '',
    fechaRegistro: new Date().toISOString().split('T')[0]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Categorías de ejemplo basadas en tu modelo
  const categorias = {
    ingreso: [
      { id: 1, nombre: 'Salario' },
      { id: 2, nombre: 'Freelance' },
      { id: 3, nombre: 'Inversiones' },
      { id: 4, nombre: 'Otros Ingresos' }
    ],
    gasto: [
      { id: 5, nombre: 'Alimentación' },
      { id: 6, nombre: 'Transporte' },
      { id: 7, nombre: 'Entretenimiento' },
      { id: 8, nombre: 'Servicios' },
      { id: 9, nombre: 'Salud' },
      { id: 10, nombre: 'Otros Gastos' }
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset categoria cuando cambia el tipo
      ...(name === 'tipo' && { idCategoria: '' })
    }));
  };

  const handleTipoSelect = (tipo: string) => {
    setFormData(prev => ({
      ...prev,
      tipo: tipo,
      idCategoria: ''
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Aquí harías el POST a tu API endpoint
      // const response = await fetch('/api/registros', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     monto: parseFloat(formData.monto),
      //     fechaCreacion: new Date().toISOString()
      //   })
      // });

      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        tipo: '',
        idCategoria: '',
        descripcion: '',
        monto: '',
        fechaRegistro: new Date().toISOString().split('T')[0]
      });

      setTimeout(() => setShowSuccess(false), 3000);
      
    } catch (error) {
      console.error('Error al guardar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      tipo: '',
      idCategoria: '',
      descripcion: '',
      monto: '',
      fechaRegistro: new Date().toISOString().split('T')[0]
    });
  };

  const isFormValid = formData.tipo && formData.idCategoria && formData.descripcion && formData.monto && formData.fechaRegistro;

  return(
    <main className="font-sans text-gray-800 bg-black-50 min-h-screen">
        <div className="flex">
          <Sidebar />
          
          {/* Contenido principal con el formulario */}
          <section className="flex-1 bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Nuevo Registro</h1>
            
            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl shadow-md">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <p className="text-green-800 font-medium">¡Registro guardado exitosamente!</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Formulario Principal */}
              <div className="lg:col-span-1">
                <div className="p-6 bg-white rounded-xl shadow-md space-y-6">
                  
                  {/* Tipo de Transacción */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-3">
                      Tipo de Transacción
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        onClick={() => handleTipoSelect('ingreso')}
                        className={`p-4 rounded-xl shadow-md cursor-pointer transition-all duration-200 ${
                          formData.tipo === 'ingreso'
                            ? 'bg-green-500 text-white'
                            : 'bg-white hover:bg-green-50 text-gray-700 border border-gray-200'
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <div className={`p-2 rounded-full ${
                            formData.tipo === 'ingreso' ? 'bg-white bg-opacity-20' : 'bg-green-100'
                          }`}>
                            <PlusCircle className={`w-6 h-6 ${
                              formData.tipo === 'ingreso' ? 'text-white' : 'text-green-600'
                            }`} />
                          </div>
                          <span className="font-semibold">📈 Ingreso</span>
                        </div>
                      </div>
                      
                      <div
                        onClick={() => handleTipoSelect('gasto')}
                        className={`p-4 rounded-xl shadow-md cursor-pointer transition-all duration-200 ${
                          formData.tipo === 'gasto'
                            ? 'bg-red-500 text-white'
                            : 'bg-white hover:bg-red-50 text-gray-700 border border-gray-200'
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <div className={`p-2 rounded-full ${
                            formData.tipo === 'gasto' ? 'bg-white bg-opacity-20' : 'bg-red-100'
                          }`}>
                            <DollarSign className={`w-6 h-6 ${
                              formData.tipo === 'gasto' ? 'text-white' : 'text-red-600'
                            }`} />
                          </div>
                          <span className="font-semibold">📉 Gasto</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Categoría */}
                  <div>
                    <label htmlFor="categoria" className="block text-lg font-semibold text-gray-800 mb-2">
                      🏷️ Categoría
                    </label>
                    <select
                      id="categoria"
                      name="idCategoria"
                      value={formData.idCategoria}
                      onChange={handleInputChange}
                      disabled={!formData.tipo}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed shadow-sm"
                    >
                      <option value="">
                        {formData.tipo ? 'Selecciona una categoría' : 'Primero selecciona el tipo'}
                      </option>
                      {formData.tipo && categorias[formData.tipo as keyof typeof categorias]?.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>
                          {categoria.nombre}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Descripción */}
                  <div>
                    <label htmlFor="descripcion" className="block text-lg font-semibold text-gray-800 mb-2">
                      📝 Descripción
                    </label>
                    <input
                      type="text"
                      id="descripcion"
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleInputChange}
                      placeholder="Ej: Compra en supermercado, Pago de consultoría..."
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                    />
                  </div>

                  {/* Monto y Fecha en fila */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="monto" className="block text-lg font-semibold text-gray-800 mb-2">
                        💰 Monto (S/)
                      </label>
                      <input
                        type="number"
                        id="monto"
                        name="monto"
                        value={formData.monto}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="fechaRegistro" className="block text-lg font-semibold text-gray-800 mb-2">
                        📅 Fecha
                      </label>
                      <input
                        type="date"
                        id="fechaRegistro"
                        name="fechaRegistro"
                        value={formData.fechaRegistro}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={handleReset}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold shadow-sm"
                    >
                      Cancelar
                    </button>
                    
                    <button
                      onClick={handleSubmit}
                      disabled={!isFormValid || isSubmitting}
                      className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-md ${
                        isFormValid && !isSubmitting
                          ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Guardando...</span>
                        </>
                      ) : (
                        <>
                          <PlusCircle className="w-4 h-4" />
                          <span>Guardar Registro</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Vista previa */}
              <div className="lg:col-span-1">
                <div className="p-6 bg-white rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Vista Previa</h3>
                  
                  {isFormValid ? (
                    <div className="space-y-4">
                      <div className={`p-4 rounded-xl ${
                        formData.tipo === 'ingreso' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            formData.tipo === 'ingreso' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-red-500 text-white'
                          }`}>
                            {formData.tipo === 'ingreso' ? '📈 Ingreso' : '📉 Gasto'}
                          </span>
                          <span className={`text-2xl font-bold ${
                            formData.tipo === 'ingreso' ? 'text-green-600' : 'text-red-500'
                          }`}>
                            S/{formData.monto}
                          </span>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-700">
                          <p><span className="font-semibold">Categoría:</span> {
                            [...categorias.ingreso, ...categorias.gasto]
                              .find(cat => cat.id.toString() === formData.idCategoria)?.nombre || 'Sin categoría'
                          }</p>
                          <p><span className="font-semibold">Descripción:</span> {formData.descripcion}</p>
                          <p><span className="font-semibold">Fecha:</span> {new Date(formData.fechaRegistro).toLocaleDateString('es-PE')}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Completa el formulario para ver la vista previa</p>
                    </div>
                  )}
                </div>

                {/* Resumen de balance actualizado */}
                {formData.tipo && formData.monto && (
                  <div className="mt-6 p-6 bg-white rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Impacto en tu Balance</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Balance Actual:</span>
                        <span className="font-bold text-green-600">S/2,500</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                          {formData.tipo === 'ingreso' ? 'Nuevo Ingreso:' : 'Nuevo Gasto:'}
                        </span>
                        <span className={`font-bold ${
                          formData.tipo === 'ingreso' ? 'text-green-600' : 'text-red-500'
                        }`}>
                          {formData.tipo === 'ingreso' ? '+' : '-'}S/{formData.monto}
                        </span>
                      </div>
                      <hr className="border-gray-200" />
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Nuevo Balance:</span>
                        <span className="text-xl font-bold text-green-600">
                          S/{formData.tipo === 'ingreso' 
                            ? (2500 + parseFloat(formData.monto || '0')).toFixed(2)
                            : (2500 - parseFloat(formData.monto || '0')).toFixed(2)
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
    </main>
  );
}