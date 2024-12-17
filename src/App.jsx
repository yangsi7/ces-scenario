import React, { useState, useEffect, useRef } from 'react'
import ScenarioSelector from './components/ScenarioSelector.jsx'
import ScenarioInfo from './components/ScenarioInfo.jsx'
import ControlPanel from './components/ControlPanel.jsx'
import ChartContainer from './components/ChartContainer.jsx'
import { loadScenarioData } from './utils/dataLoader.js'
import { getScenarioInfo } from './utils/scenarioInfo.js'

export default function App() {
  const [selectedScenario, setSelectedScenario] = useState('sepsis')
  const [scenarioData, setScenarioData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Chart options state
  const [theme, setTheme] = useState('light')
  const [chartType, setChartType] = useState('area')
  const [visualOptions, setVisualOptions] = useState({
    colorScheme: 'azure',
    lineWeight: '2',
    showPoints: true,
    showGridX: false,
    showGridY: false,
    showTooltip: true,
    showLegend: false,
    showTitle: false,
    showAnomalies: false
  })

  const scenarioMeta = getScenarioInfo(selectedScenario)
  const exporterRef = useRef(null) 

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError('')
      try {
        const data = await loadScenarioData(selectedScenario)
        setScenarioData(data)
      } catch (err) {
        setError('Failed to load data: ' + err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [selectedScenario])

  const onVisualOptionChange = (option, value) => {
    setVisualOptions(prev => ({ ...prev, [option]: value }))
  }

  const handleRegisterExporter = (exporter) => {
    exporterRef.current = exporter
  }

  const handleExportAllPNG = () => {
    exporterRef.current?.exportAllAsPNG()
  }

  const handleExportAllSVG = () => {
    exporterRef.current?.exportAllAsSVG()
  }

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 theme-${theme}`}>
      {error && <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4 font-medium">{error}</div>}

      <ScenarioSelector selectedScenario={selectedScenario} onChange={setSelectedScenario}/>
      {scenarioMeta && <ScenarioInfo scenarioMeta={scenarioMeta}/>}
      <ControlPanel
        theme={theme}
        chartType={chartType}
        onThemeChange={setTheme}
        onChartTypeChange={setChartType}
        visualOptions={visualOptions}
        onVisualOptionChange={onVisualOptionChange}
        scenario={selectedScenario}
        onExportAllPNG={handleExportAllPNG}
        onExportAllSVG={handleExportAllSVG}
      />

      {loading && <div className="text-center text-gray-500 my-8">Loading data...</div>}
      {!loading && scenarioData && (
        <ChartContainer
          data={scenarioData}
          chartType={chartType}
          visualOptions={visualOptions}
          scenario={selectedScenario}
          scenarioMeta={scenarioMeta}
          onRegisterExporter={handleRegisterExporter}
        />
      )}
    </div>
  )
}
