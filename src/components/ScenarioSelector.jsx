import React from 'react'
import { FiArrowDownCircle } from 'react-icons/fi'

export default function ScenarioSelector({ selectedScenario, onChange }) {
  return (
    <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm mb-6">
      <div className="flex items-center mb-4 space-x-3">
        <FiArrowDownCircle className="text-primary text-3xl" />
        <h2 className="text-2xl font-bold text-gray-800">Select a Healthcare Scenario</h2>
      </div>
      <p className="text-gray-600 mb-4">
        Choose from various patient health scenarios to visualize trends over different timeframes. Each scenario provides insights into vital signs, health indicators, and potential clinical significance.
      </p>
      <div className="flex flex-col space-y-2 max-w-sm">
        <label className="text-sm font-medium text-gray-700">Scenario:</label>
        <select
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 bg-gray-50"
          value={selectedScenario} 
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="sepsis">Sepsis (Elderly Patient, 24h)</option>
          <option value="sleep_apnea">Sleep & AFib/Apnea (14d)</option>
          <option value="chf_afib">CHF & High AFib Burden (7d)</option>
          <option value="hypertensive_emergency">Hypertensive Emergency (30d)</option>
          <option value="hypertension">Mild Hypertension (7d)</option>
          <option value="afib">AFib Scenario (7d)</option>
          <option value="elderly_infection">Elderly Infection (24h)</option>
        </select>
      </div>
    </div>
  )
}
