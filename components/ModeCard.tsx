import React from 'react'

export function ModeCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="card">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
        </div>
      </div>
      {children}
    </section>
  )
}
