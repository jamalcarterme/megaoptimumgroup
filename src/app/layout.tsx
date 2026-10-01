import './globals.css'
import type { Metadata, Viewport } from 'next'
import Image from 'next/image'
import { Poppins, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Effects from '@/components/Effects'
import { site } from '@/lib/data'
const body = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--f-body' })
const head = Playfair_Display({ subsets: ['latin'], weight: ['600', '800'], style: ['normal', 'italic'], variable: '--f-head' })
export const metadata: Metadata = {
  title: { default: 'MEGAOPTIMUM Group Multi-Investment Ltd.', template: '%s | MEGAOPTIMUM Group' },
  description: 'Oil & Gas, Real Estate, Automobile, Welding, Interior Design, Security, Logistics and Industrial Cleaning in Lagos.',
}
export const viewport: Viewport = { width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${head.variable}`}>
      <body>
        <div id="pre"><Image src="/img/logo.png" alt="" width={150} height={195} priority /><i /></div>
        <Header />
        <main>{children}</main>
        <Footer />
        <a id="wa" href={`https://wa.me/${site.wa}`} target="_blank" rel="noreferrer">💬 Chat with us</a>
        <Effects />
      </body>
    </html>
  )
}
