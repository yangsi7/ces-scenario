import React from 'react'
import { exportScenarioData } from '../utils/dataLoader.js'

const ControlPanel = ({ 
  theme, 
  chartType, 
  onThemeChange, 
  onChartTypeChange,
  visualOptions,
  onVisualOptionChange,
  scenario,
  onExportAllPNG,
  onExportAllSVG
}) => {
  const colorSchemes = {
    azure: 'Azure',
    emerald: 'Emerald',
    violet: 'Violet',
    gray: 'Gray',
    black: 'Black',
    pastel: 'Pastel'
  }

  return (
    <div className="card space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h3 className="text-lg font-semibold">Controls</h3>
        <div className="flex flex-wrap items-center gap-4">
          <button onClick={() => exportScenarioData(scenario)}>
            Export CSV
          </button>
          <button onClick={onExportAllPNG}>
            Export All PNG
          </button>
          <button onClick={onExportAllSVG}>
            Export All SVG
          </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-4 gap-4">
        <div className="control-group">
          <label>Theme</label>
          <select
            value={theme}
            onChange={(e) => onThemeChange(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="pastel">Pastel</option>
            <option value="high-contrast">High Contrast</option>
          </select>
        </div>

        <div className="control-group">
          <label>Chart Type</label>
          <select
            value={chartType}
            onChange={(e) => onChartTypeChange(e.target.value)}
          >
            <option value="area">Area</option>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="scatter">Scatter</option>
          </select>
        </div>

        <div className="control-group">
          <label>Color Palette</label>
          <select
            value={visualOptions.colorScheme}
            onChange={(e) => onVisualOptionChange('colorScheme', e.target.value)}
          >
            {Object.entries(colorSchemes).map(([key, name]) => (
              <option key={key} value={key}>{name}</option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label>Line Weight</label>
          <select
            value={visualOptions.lineWeight}
            onChange={(e) => onVisualOptionChange('lineWeight', e.target.value)}
          >
            <option value="1">Thin</option>
            <option value="1.5">Light</option>
            <option value="2">Medium</option>
            <option value="2.5">Bold</option>
            <option value="3">Extra Bold</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={visualOptions.showPoints}
            onChange={(e) => onVisualOptionChange('showPoints', e.target.checked)}
          />
          <span>Data Points</span>
        </label>

        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={visualOptions.showTooltip}
            onChange={(e) => onVisualOptionChange('showTooltip', e.target.checked)}
          />
          <span>Tooltips</span>
        </label>

        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={visualOptions.showGridX}
            onChange={(e) => onVisualOptionChange('showGridX', e.target.checked)}
          />
          <span>Grid X</span>
        </label>

        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={visualOptions.showGridY}
            onChange={(e) => onVisualOptionChange('showGridY', e.target.checked)}
          />
          <span>Grid Y</span>
        </label>

        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={visualOptions.showLegend}
            onChange={(e) => onVisualOptionChange('showLegend', e.target.checked)}
          />
          <span>Legend</span>
        </label>

        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={visualOptions.showTitle}
            onChange={(e) => onVisualOptionChange('showTitle', e.target.checked)}
          />
          <span>Show Title</span>
        </label>

        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={visualOptions.showAnomalies}
            onChange={(e) => onVisualOptionChange('showAnomalies', e.target.checked)}
          />
          <span>Show Anomalies (X - mean)</span>
        </label>
      </div>
    </div>
  )
}

export default ControlPanel
