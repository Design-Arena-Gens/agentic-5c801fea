"use client"

import React from 'react'
import { AudioEngine, type WaveType } from '@/lib/audio/engine'

const waves: WaveType[] = ['sine', 'square', 'sawtooth', 'triangle']

export function ManualControl() {
  const engineRef = React.useRef<AudioEngine | null>(null)
  const [freq, setFreq] = React.useState(165)
  const [wave, setWave] = React.useState<WaveType>('sine')
  const [active, setActive] = React.useState(false)

  React.useEffect(() => {
    engineRef.current ??= new AudioEngine()
  }, [])

  const toggle = async () => {
    if (!engineRef.current) return
    if (!active) {
      await engineRef.current.resume()
      engineRef.current.startTone(freq, wave)
      setActive(true)
    } else {
      engineRef.current.stopAll()
      setActive(false)
    }
  }

  const onFreqChange = (v: number) => {
    setFreq(v)
    if (active) {
      engineRef.current?.stopAll()
      engineRef.current?.startTone(v, wave)
    }
  }

  const onWaveChange = (w: WaveType) => {
    setWave(w)
    if (active) {
      engineRef.current?.stopAll()
      engineRef.current?.startTone(freq, w)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {waves.map((w) => (
          <button key={w} onClick={() => onWaveChange(w)} className={`btn ${wave === w ? 'btn-primary' : 'btn-ghost'}`}>{w}</button>
        ))}
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">Frequency: {freq} Hz</label>
        <input
          type="range"
          min={100}
          max={10000}
          step={1}
          value={freq}
          onChange={(e) => onFreqChange(Number(e.target.value))}
          className="mt-2 w-full"
        />
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggle} className={`btn ${active ? 'btn-danger' : 'btn-primary'}`}>{active ? 'Stop' : 'Play Tone'}</button>
        <button onClick={async () => {
          await engineRef.current?.resume()
          engineRef.current?.sweep({ startHz: 120, endHz: 9000, durationMs: 8000, wave })
        }} className="btn btn-ghost">8s Sweep</button>
      </div>
      <p className="text-xs text-slate-500">Try waves and frequencies between 120–9000 Hz. Lower tones can help eject water; higher sweeps can free dust.</p>
    </div>
  )
}
