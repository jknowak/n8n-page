import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'LLMs & n8n Automation Training | airm.pro',
  description: 'Master Large Language Models and n8n workflow automation. Learn LLM theory, prompt engineering, RAG architecture, and build production-ready AI workflows.',
  keywords: ['LLM', 'n8n', 'automation', 'AI training', 'RAG', 'prompt engineering', 'workflow automation'],
  openGraph: {
    title: 'LLMs & n8n Automation Training | airm.pro',
    description: 'Master Large Language Models and n8n workflow automation. From theory to production-ready AI workflows.',
    type: 'website',
    url: 'https://n8n.airm.pro',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
