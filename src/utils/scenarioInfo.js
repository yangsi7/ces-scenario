export function getScenarioInfo(scenario) {
  // Add metadata about scenario duration and sampling
  switch (scenario) {
    case 'sepsis':
      return {
        title: 'Sepsis Scenario (24 hours, hourly data)',
        timeframe: '24 hours',
        dataPoints: 24,
        description: 'Acute onset over 24 hours: rising temp, HR, RR, dropping BP and activity.',
        timeLabelFn: (index) => `${index}h`,
        clinicalSignificance: 'Immediate sign of sepsis. Urgent medical attention needed.',
      }
    case 'sleep_apnea':
      return {
        title: 'Sleep & AFib/Apnea Scenario (14 days, nightly)',
        timeframe: '14 days',
        dataPoints: 14,
        description: 'Gradual worsening over 2 weeks: reduced sleep, increased AFib burden and respiratory issues.',
        timeLabelFn: (index) => `Day ${index+1}`,
        clinicalSignificance: 'Progressive sleep and cardiac issues, intervention before severe complications.',
      }
    case 'chf_afib':
      return {
        title: 'CHF & High AFib Burden Scenario (7 days, thrice daily = 21 points)',
        timeframe: '7 days',
        dataPoints: 21,
        description: 'High AFib, elevated BP/HR, poor exercise tolerance over a week, 3 measurements/day.',
        // Label day and time of day: index % 3 => 0: AM, 1: Noon, 2: PM
        timeLabelFn: (i) => {
          const day = Math.floor(i/3) + 1
          const slot = i % 3
          const part = slot === 0 ? 'AM' : slot === 1 ? 'Noon' : 'PM'
          return `Day ${day} ${part}`
        },
        clinicalSignificance: 'Imminent CHF decompensation risk.',
      }
    case 'hypertensive_emergency':
      return {
        title: 'Hypertensive Emergency Scenario (30 days, twice daily = 60 points)',
        timeframe: '30 days',
        dataPoints: 60,
        description: 'Gradual BP rise over a month with twice daily measurements, onset of headaches and RR increase.',
        timeLabelFn: (i) => {
          const day = Math.floor(i/2) + 1
          const slot = i % 2 === 0 ? 'AM' : 'PM'
          return `Day ${day} ${slot}`
        },
        clinicalSignificance: 'Developing hypertensive emergency, opportunity for early intervention.',
      }
    case 'hypertension':
      // Assume data length known from CSV. If not known, just index.
      return {
        title: 'Mild Hypertension Scenario (7 days, daily data)',
        timeframe: '7 days',
        // If actual data differs, just fallback to index labeling
        description: 'Gradual increase in BP over a week.',
        timeLabelFn: (i) => `Day ${i+1}`,
        clinicalSignificance: 'Early-stage hypertension, intervene early.'
      }
    case 'afib':
      return {
        title: 'AFib Scenario (7 days, daily)',
        timeframe: '7 days',
        description: 'Increasing AFib burden over a week.',
        timeLabelFn: (i) => `Day ${i+1}`,
        clinicalSignificance: 'Needs medication or rhythm management.'
      }
    case 'elderly_infection':
      return {
        title: 'Elderly Infection (Legacy Scenario, 24 hours)',
        timeframe: '24 hours',
        description: 'Similar to sepsis: rising temp, HR, RR in one day.',
        timeLabelFn: (i) => `${i}h`,
        clinicalSignificance: 'Possible infection leading to sepsis-like state.'
      }
    default:
      return {
        title: 'Unknown Scenario',
        timeframe: 'Unknown',
        description: 'No data',
        timeLabelFn: (i) => `Time ${i}`
      }
  }
}
