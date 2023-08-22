import Providers from '@/components/contexts/Provider'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components//header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} bg-slate-400`}>
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  )
}
