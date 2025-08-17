"use client";

import React, { useState } from "react";

export default function Calculadora() {
  const [initialSaving, setInitialSaving] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [annualInterestRate, setAnnualInterestRate] = useState(5);
  const [periodMonths, setPeriodMonths] = useState(12);
  const [totalSavingsResult, setTotalSavingsResult] = useState("S/0.00");
  const [error, setError] = useState("");

  function calculateSavings() {
    if (
      isNaN(initialSaving) ||
      isNaN(monthlyContribution) ||
      isNaN(annualInterestRate) ||
      isNaN(periodMonths)
    ) {
      setError("Por favor, ingrese valores válidos.");
      setTotalSavingsResult("S/0.00");
      return;
    }

    setError("");

    const monthlyInterestRate = annualInterestRate / 100 / 12;
    let totalSavings = initialSaving;

    if (monthlyInterestRate > 0) {
      totalSavings =
        initialSaving * Math.pow(1 + monthlyInterestRate, periodMonths) +
        monthlyContribution *
          ((Math.pow(1 + monthlyInterestRate, periodMonths) - 1) /
            monthlyInterestRate);
    } else {
      totalSavings = initialSaving + monthlyContribution * periodMonths;
    }

    setTotalSavingsResult(`S/${totalSavings.toFixed(2)}`);
  }

  return (
    <main className="font-sans text-gray-800 flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <div className="calculator-container bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Calculadora de Ahorro
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          ¿cuánto dinero puedes ahorrar en un periodo determinado?
        </p>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="initialSaving"
              className="block text-sm font-medium text-gray-700"
            >
              Ahorro Inicial (S/.):
            </label>
            <input
              type="number"
              id="initialSaving"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              value={initialSaving}
              onChange={(e) => setInitialSaving(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label
              htmlFor="monthlyContribution"
              className="block text-sm font-medium text-gray-700"
            >
              Aporte Mensual (S/.):
            </label>
            <input
              type="number"
              id="monthlyContribution"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label
              htmlFor="interestRate"
              className="block text-sm font-medium text-gray-700"
            >
              Tasa de Interés Anual (%):
            </label>
            <input
              type="number"
              id="interestRate"
              step="0.1"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              value={annualInterestRate}
              onChange={(e) => setAnnualInterestRate(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label
              htmlFor="periodMonths"
              className="block text-sm font-medium text-gray-700"
            >
              Período (Meses):
            </label>
            <input
              type="number"
              id="periodMonths"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              value={periodMonths}
              onChange={(e) => setPeriodMonths(parseInt(e.target.value, 10))}
            />
          </div>
        </div>

        <button
          onClick={calculateSavings}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calcular Ahorro
        </button>

        {error && (
          <p className="mt-4 text-red-600 font-semibold text-center">{error}</p>
        )}

        <div className="mt-6 p-4 bg-blue-100 border border-blue-300 rounded-md text-center">
          <h4 className="font-bold text-xl text-blue-800 mb-2">Total Ahorrado:</h4>
          <p className="text-3xl font-extrabold text-blue-900">{totalSavingsResult}</p>
        </div>

        <div className="mt-6 text-center">
          <a href="/#recursos" className="text-blue-600 hover:underline">
            ← Volver a Recursos
          </a>
        </div>
      </div>
    </main>
  );
}
