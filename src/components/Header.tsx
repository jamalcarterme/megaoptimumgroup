'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NAV } from '@/lib/data'
export default function Header() {
  const path = usePathname()
  const [open, setOpen] = useState(false)
  const [sc, setSc] = useState(false)
  useEffect(() => setOpen(false), [path])
  useEffect(() => {
    const f = () => setSc(scrollY > 40)
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  useEffect(() => {
    const c = (e: MouseEvent) => { if (!(e.target as HTMLElement).closest('nav,#bg')) setOpen(false) }
    document.addEventListener('click', c); return () => document.removeEventListener('click', c)
  }, [])
  const on = (h: string) => (h === '/' ? path === '/' : path.startsWith(h))
  return (
    <header className={sc ? 'sc' : ''}>
      <Link href="/" className="brand"><Image src="/img/logo.png" alt="MEGAOPTIMUM" width={58} height={76} priority /><span className="rc">RC: 1294422</span></Link>
      <button id="bg" aria-label="menu" onClick={() => setOpen(o => !o)}>{open ? '✕' : '☰'}</button>
      <nav className={open ? 'o' : ''}>
        {NAV.map(([h, t]) => <Link key={h} href={h} className={on(h) ? 'on' : ''}>{t}</Link>)}
        <Link href="/get-quote" className="btn">Get a Quote</Link>
      </nav>
    </header>
  )
}
