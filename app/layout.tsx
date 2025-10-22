import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phone Speaker Cleaner — Water & Dust Remover',
  description:
    'Revitalize your sound. Use sound waves and vibration to help eject water and dust from your phone speakers. Auto, Manual, and Vibration modes.',
  applicationName: 'Speaker Cleaner',
  metadataBase: new URL('https://agentic-5c801fea.vercel.app'),
  openGraph: {
    title: 'Speaker Cleaner — Water & Dust Remover',
    description:
      'Auto 50s clean, manual frequency, and vibration mode to help clear your phone speakers.',
    url: 'https://agentic-5c801fea.vercel.app',
    siteName: 'Speaker Cleaner',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speaker Cleaner',
    description:
      'Clear water and dust using sound waves and vibration. Auto, Manual, Vibration.',
  },
  keywords: [
    'water eject', 'speaker cleaner', 'dust remover', 'phone audio', 'water out of speaker', 'vibration clean'
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container-max py-10">
          {children}
          <footer className="mt-16 text-center text-sm text-slate-500">
            <p>Use at your own discretion. Keep volume moderate. Results vary by device.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
