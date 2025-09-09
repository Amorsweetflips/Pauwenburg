import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PasswordProtection from '@/components/PasswordProtection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fysiocentrum Pauwendaal - Gespecialiseerde Fysiotherapie',
  description: 'Professionele fysiotherapie in Lelystad. Gespecialiseerde behandeling voor rug- en nekpijn, triggerpoint therapie, psychosomatische fysiotherapie en meer.',
  keywords: 'fysiotherapie, Lelystad, Pauwendaal, rugpijn, nekpijn, triggerpoint, dry needling, psychosomatisch',
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