import Papa from 'papaparse'

const scenarioFiles = {
  sepsis: 'scenario_sepsis.csv',
  sleep_apnea: 'scenario_sleep_apnea.csv',
  chf_afib: 'scenario_chf_afib.csv',
  hypertensive_emergency: 'scenario_hypertensive_emergency.csv',
  hypertension: 'scenario_hypertension.csv',
  afib: 'scenario_afib.csv',
  elderly_infection: 'scenario_elderly_infection.csv'
}

export async function loadScenarioData(scenario) {
  if (!scenarioFiles[scenario]) throw new Error('Scenario not found: ' + scenario)
  const response = await fetch(`/data/${scenarioFiles[scenario]}`)
  if (!response.ok) throw new Error('Network error loading scenario data.')

  const text = await response.text()
  const parsed = Papa.parse(text, { header: true, dynamicTyping: true, skipEmptyLines: true })
  if (parsed.errors && parsed.errors.length > 0) {
    throw new Error('CSV parsing error: ' + parsed.errors.map(e => e.message).join(', '))
  }

  const rows = parsed.data.map(d => d)
  const columns = parsed.meta.fields
  return { rows, columns }
}

export async function exportScenarioData(scenario) {
  if (!scenarioFiles[scenario]) throw new Error('Scenario not found: ' + scenario)
  const response = await fetch(`/data/${scenarioFiles[scenario]}`)
  if (!response.ok) throw new Error('Network error loading scenario data.')
  const text = await response.text()

  const blob = new Blob([text], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${scenario}.csv`
  a.click()
  URL.revokeObjectURL(url)
}
