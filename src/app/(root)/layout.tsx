import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'
import Header from '@/components/shared/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Redovisningskollen',
  description: 'Hitta en redovisningsbyrå som passar dig.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex h-screen flex-col'>
      {/* HEADER */}
      <Header />
      <main className='flex-1'>{children}</main>
      {/* FOOTER */}
    </div>
  )
}

