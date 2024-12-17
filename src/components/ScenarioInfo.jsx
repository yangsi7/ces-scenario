import React from 'react'

export default function ScenarioInfo({ scenarioMeta }) {
  if (!scenarioMeta) return null

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-2">{scenarioMeta.title}</h2>
      <div className="text-sm text-gray-500 mb-4">{scenarioMeta.timeframe}</div>
      <p className="mb-4 text-gray-700">{scenarioMeta.description}</p>
      {scenarioMeta.keyMetrics && (
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Key Clinical Indicators:</h3>
          <ul className="space-y-1 text-gray-600 list-disc list-inside">
            {scenarioMeta.keyMetrics.map((km, idx) => <li key={idx}>{km}</li>)}
          </ul>
        </div>
      )}
      {scenarioMeta.clinicalSignificance && (
        <div>
          <h3 className="text-lg font-medium mb-2">Clinical Significance:</h3>
          <p className="text-gray-700">{scenarioMeta.clinicalSignificance}</p>
        </div>
      )}
    </div>
  )
}
