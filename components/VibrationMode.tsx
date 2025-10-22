"use client"

import React from 'react'

const patterns: Record<string, number[]> = {
  "Pulses": [200, 100, 200, 100, 200, 400, 200, 400, 200, 800],
  "Buzz": [600, 200, 600, 200, 600, 200],
  "Drill": [100, 100, 100, 100, 100, 100, 800, 200, 800, 200],
}

export function VibrationMode() {
  const [supported, setSupported] = React.useState(false)
  const [running, setRunning] = React.useState(false)
  const [patternName, setPatternName] = React.useState<keyof typeof patterns>('Pulses')
  const timerRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    setSupported(typeof navigator !== 'undefined' && 'vibrate' in navigator)
    return () => { if (timerRef.current) window.clearInterval(timerRef.current) }
  }, [])

  const start = () => {
    if (!supported) return
    setRunning(true)
    navigator.vibrate(patterns[patternName])
    timerRef.current = window.setInterval(() => navigator.vibrate(patterns[patternName]), 1200)
  }

  const stop = () => {
    if (!supported) return
    setRunning(false)
    if (timerRef.current) window.clearInterval(timerRef.current)
    navigator.vibrate(0)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {Object.keys(patterns).map((k) => (
          <button key={k} onClick={() => setPatternName(k as any)} className={`btn ${patternName === k ? 'btn-primary' : 'btn-ghost'}`}>{k}</button>
        ))}
      </div>
      {supported ? (
        <div className="flex items-center gap-3">
          {!running ? (
            <button onClick={start} className="btn btn-primary">Start Vibration</button>
          ) : (
            <button onClick={stop} className="btn btn-danger">Stop</button>
          )}
        </div>
      ) : (
        <p className="text-sm text-slate-500">Vibration is not supported on this device or browser. Try using the Auto or Manual modes.</p>
      )}
      <p className="text-xs text-slate-500">Place the speaker facing down and gently shake during vibration for better results.</p>
    </div>
  )
}
