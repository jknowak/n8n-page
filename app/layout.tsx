import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Szkolenie LLM i Automatyzacja n8n | airm.pro',
  description: 'Opanuj duze modele jezykowe i automatyzacje workflow n8n. Teoria LLM, prompt engineering, architektura RAG i budowa produkcyjnych workflow AI.',
  keywords: ['LLM', 'n8n', 'automatyzacja', 'szkolenie AI', 'RAG', 'prompt engineering', 'automatyzacja workflow'],
  openGraph: {
    title: 'Szkolenie LLM i Automatyzacja n8n | airm.pro',
    description: 'Opanuj duze modele jezykowe i automatyzacje workflow n8n. Od teorii do produkcyjnych workflow AI.',
    type: 'website',
    url: 'https://n8n.airm.pro',
  },
}

export const viewport: Viewport = {
  themeColor: '#151a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
