export function detectAnomalies(rows, metric) {
  // Compute mean for anomalies
  if (!rows || rows.length === 0) return { mean: 0 }
  const values = rows.map(r => (typeof r[metric] === 'number') ? r[metric] : NaN).filter(v => !isNaN(v))
  if (values.length < 1) return { mean: 0 }

  const mean = values.reduce((a,b) => a+b,0)/values.length
  return { mean }
}
