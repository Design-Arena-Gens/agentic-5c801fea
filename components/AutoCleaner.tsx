"use client"

import React from 'react'
import { AudioEngine } from '@/lib/audio/engine'

export function AutoCleaner() {
  const engineRef = React.useRef<AudioEngine | null>(null)
  const [running, setRunning] = React.useState(false)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    engineRef.current ??= new AudioEngine()
  }, [])

  const stopRef = React.useRef<null | (() => void)>(null)

  const start = async () => {
    if (!engineRef.current) return
    await engineRef.current.resume()
    setRunning(true)
    setProgress(0)
    stopRef.current = await engineRef.current.autoClean((elapsed, total) => {
      setProgress(Math.min(100, Math.round((elapsed / total) * 100)))
    })
  }

  const stop = () => {
    stopRef.current?.()
    stopRef.current = null
    engineRef.current?.stopAll()
    setRunning(false)
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        {!running ? (
          <button onClick={start} className="btn btn-primary">Start 50s Auto Clean</button>
        ) : (
          <button onClick={stop} className="btn btn-danger">Stop</button>
        )}
        <div className="badge">Progress: {progress}%</div>
      </div>
      <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full bg-brand-600 transition-all" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-3 text-xs text-slate-500">Keep volume moderate. Hold the speaker facing down to help drain water.</p>
    </div>
  )
}
