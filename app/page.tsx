import { ModeCard } from '@/components/ModeCard'
import { AutoCleaner } from '@/components/AutoCleaner'
import { ManualControl } from '@/components/ManualControl'
import { VibrationMode } from '@/components/VibrationMode'

export default function Page() {
  return (
    <main className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Speaker Cleaner: Revitalize Your Sound</h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Remove water and dust with sound waves and vibration. Three modes to restore clear, crisp audio on your device.
        </p>
        <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-2">
          <span className="badge">⚡ Water Remover</span>
          <span className="badge">🔊 Clear Sounds</span>
          <span className="badge">✅ Auto / Manual / Vibration</span>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ModeCard title="AUTO CLEAN" subtitle="One-tap 50‑second cleaning routine">
          <AutoCleaner />
        </ModeCard>

        <ModeCard title="MANUAL CLEAN" subtitle="Choose wave and frequency">
          <ManualControl />
        </ModeCard>

        <ModeCard title="VIBRATION MODE" subtitle="Use device vibration to help dislodge particles">
          <VibrationMode />
        </ModeCard>

        <ModeCard title="Tips" subtitle="Get the most out of cleaning">
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>Set volume to a moderate-high level; avoid maximum to protect hearing.</li>
            <li>Hold your phone with the speaker facing down to let water drain.</li>
            <li>Run Auto Clean once, then try Manual tones between 120–900 Hz.</li>
            <li>If available, follow with Vibration while gently shaking.</li>
          </ul>
        </ModeCard>
      </div>
    </main>
  )
}
