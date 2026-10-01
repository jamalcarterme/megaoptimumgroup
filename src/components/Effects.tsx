'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
export default function Effects() {
  const path = usePathname()
  const [dn, setDn] = useState(false)
  const [up, setUp] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => document.getElementById('pre')?.classList.add('off'), 700)
    return () => clearTimeout(t)
  }, [])
  // reveal animations replay every time a section enters the view
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('in', e.isIntersecting)), { threshold: 0.15 })
    document.querySelectorAll('.rv').forEach(e => io.observe(e))
    return () => io.disconnect()
  }, [path])
  useEffect(() => {
    const f = () => {
      const m = document.documentElement.scrollHeight - innerHeight
      setDn(scrollY > m - 60); setUp(scrollY < 60)
    }
    f(); addEventListener('scroll', f, { passive: true }); addEventListener('resize', f)
    const t = setTimeout(f, 400)
    return () => { removeEventListener('scroll', f); removeEventListener('resize', f); clearTimeout(t) }
  }, [path])
  return (
    <>
      <button id="upb" aria-label="Scroll up" className={up ? 'hid' : ''} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      <button id="dn" aria-label="Scroll down" className={dn ? 'hid' : ''} onClick={() => scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}>↓</button>
    </>
  )
}
