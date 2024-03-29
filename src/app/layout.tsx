import { Metadata } from 'next'
import '../globals.css'
import { Inter } from 'next/font/google'
import 'intersection-observer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s - Hub Synce',
    default: 'Hub Synce',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className + ' relative'}>{children}</body>
    </html>
  )
}
