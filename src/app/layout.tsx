import PasswordProtection from '@/components/PasswordProtection'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fysiocentrum Pauwendaal - Gespecialiseerde Fysiotherapie',
  description: 'Professionele fysiotherapie in Lelystad. Gespecialiseerde behandeling voor rug- en nekpijn, triggerpoint therapie, psychosomatische fysiotherapie en meer.',
  keywords: 'fysiotherapie, Lelystad, Pauwendaal, rugpijn, nekpijn, triggerpoint, dry needling, psychosomatisch',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <PasswordProtection>
          {children}
        </PasswordProtection>
      </body>
    </html>
  )
}
