import React, { useMemo, useRef, useEffect } from 'react'
import { Line, Bar, Scatter } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { detectAnomalies } from '../utils/anomalyDetection.js'
import C2S from 'canvas2svg' // Importing canvas2svg

ChartJS.register(LineElement, PointElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

export default function ChartContainer({ data, chartType, visualOptions, scenario, scenarioMeta, onRegisterExporter }) {
  const { rows, columns } = data
  const metrics = columns.filter(c => c !== 'Time')

  // Refs to each chart instance
  const chartRefs = useRef([])

  const anomaliesData = useMemo(() => {
    const obj = {}
    metrics.forEach(metric => {
      const { mean } = detectAnomalies(rows, metric)
      obj[metric] = mean
    })
    return obj
  }, [rows, metrics])

  const baseColorSchemes = {
    azure: '#3b82f6',
    emerald: '#10b981',
    violet: '#8b5cf6',
    gray: '#475569',
    black: '#000000',
    pastel: '#fda4af'
  }

  const lineColor = baseColorSchemes[visualOptions.colorScheme] || '#3b82f6'

  const isArea = chartType === 'area'
  const showFill = isArea

  const getChartComponent = () => {
    if (chartType === 'bar') return Bar
    if (chartType === 'scatter') return Scatter
    return Line
  }

  const ChartComp = getChartComponent()

  const getChartDataForMetric = (metric) => {
    const meanVal = anomaliesData[metric] || 0
    const values = rows.map((r, i) => {
      let y = r[metric]
      if (visualOptions.showAnomalies) {
        y = r[metric] - meanVal
      }
      return { x: i, y }
    })

    return {
      datasets: [
        {
          label: metric,
          data: values,
          borderColor: lineColor,
          backgroundColor: showFill ? `${lineColor}33` : lineColor,
          borderWidth: parseFloat(visualOptions.lineWeight),
          pointRadius: visualOptions.showPoints ? 3 : 0,
          pointHoverRadius: visualOptions.showPoints ? 5 : 0,
          fill: showFill ? 'start' : false,
          tension: 0.2,
        }
      ]
    }
  }

  const scenarioLabelFn = scenarioMeta && scenarioMeta.timeLabelFn ? scenarioMeta.timeLabelFn : (i)=>`Time ${i}`
  
  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: 'Time',
          color: '#64748b'
        },
        ticks: {
          color: '#64748b',
          callback: (val) => scenarioLabelFn(val)
        },
        grid: {
          color: visualOptions.showGridX ? '#e2e8f0' : 'transparent'
        }
      },
      y: {
        title: {
          display: true,
          text: visualOptions.showAnomalies ? 'Value (X - mean)' : 'Value',
          color: '#64748b'
        },
        ticks: {
          color: '#64748b'
        },
        grid: {
          color: visualOptions.showGridY ? '#e2e8f0' : 'transparent'
        }
      }
    },
    plugins: {
      legend: {
        display: visualOptions.showLegend,
        labels: {
          color: '#64748b'
        }
      },
      title: {
        display: visualOptions.showTitle,
        text: scenario.charAt(0).toUpperCase() + scenario.slice(1) + ' Scenario Data',
        color: '#1e293b',
        font: {
          size: 18,
          weight: '600'
        },
        padding: 20
      },
      tooltip: {
        enabled: visualOptions.showTooltip,
        backgroundColor: '#ffffff',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        bodyColor: '#1e293b',
        titleColor: '#1e293b'
      }
    },
    elements: {
      line: {
        fill: showFill ? 'start' : false
      }
    }
  }), [visualOptions, chartType, scenario, scenarioMeta])

  // Store chart instances
  const onChartRef = (ref, idx) => {
    chartRefs.current[idx] = ref
  }

  // Export all charts as PNG
  const exportAllAsPNG = () => {
    chartRefs.current.forEach((chartRef, i) => {
      if (chartRef && chartRef.toBase64Image) {
        const url = chartRef.toBase64Image()
        downloadFile(url, `${scenario}_metric_${metrics[i]}.png`)
      }
    })
  }

  // Export all charts as SVG using canvas2svg
  // We'll re-draw the chart using the chart's config onto a canvas2svg context.
  const exportAllAsSVG = () => {
    chartRefs.current.forEach((chartRef, i) => {
      const chart = chartRef
      if (chart) {
        // Create a new canvas2svg context
        const svgContext = new C2S(chart.width, chart.height)
        // Temporarily replace chart.ctx with svgContext
        const originalCtx = chart.ctx
        chart.ctx = svgContext
        // Re-draw chart
        chart.update('none') // no animation
        chart.draw()
        // Restore original context
        chart.ctx = originalCtx
        chart.update('none')
        const svgData = svgContext.getSerializedSvg(true)
        const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        downloadFile(url, `${scenario}_metric_${metrics[i]}.svg`)
        URL.revokeObjectURL(url)
      }
    })
  }

  const downloadFile = (url, filename) => {
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
  }

  // Provide export functions back up to parent (App) so ControlPanel can trigger them
  useEffect(() => {
    if (onRegisterExporter) {
      onRegisterExporter({
        exportAllAsPNG,
        exportAllAsSVG
      })
    }
  }, [onRegisterExporter])

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold mb-4">Metrics for {scenarioMeta && scenarioMeta.title}</h2>
      <div className="grid grid-cols-1 gap-8">
        {metrics.map((metric, idx) => (
          <div key={metric} className="card" style={{ height: '400px' }}>
            <h3 className="text-lg font-medium mb-2 capitalize">{metric}</h3>
            <div className="relative w-full h-full">
              <ChartComp 
                data={getChartDataForMetric(metric)} 
                options={options} 
                ref={(chartEl) => {
                  // react-chartjs-2 v5: chartEl.chartInstance replaced by direct ref
                  chartRefs.current[idx] = chartEl?.chartInstance ?? chartEl?.ctx?.chart
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
