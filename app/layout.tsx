import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QTechs',
  description: 'QTechs - Leading Development Agency',
  generator: 'QTechs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
