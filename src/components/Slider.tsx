'use client'
import { useEffect, useRef } from 'react'
export default function Slider({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const nx = useRef<(d: number) => void>(() => {})
  useEffect(() => {
    const s = root.current!, t = track.current!
    let p = false, d = false, x = 0, sl = 0
    nx.current = (dir: number) => {
      const m = t.scrollWidth - t.clientWidth, w = (t.firstElementChild as HTMLElement).offsetWidth + 24
      if (dir > 0 && t.scrollLeft >= m - 4) t.scrollTo({ left: 0, behavior: 'smooth' })
      else if (dir < 0 && t.scrollLeft <= 4) t.scrollTo({ left: m, behavior: 'smooth' })
      else t.scrollBy({ left: dir * w, behavior: 'smooth' })
    }
    const pause = () => (p = true), play = () => (p = false), tEnd = () => setTimeout(play, 3000)
    s.addEventListener('mouseenter', pause); s.addEventListener('mouseleave', play)
    s.addEventListener('touchstart', pause, { passive: true }); s.addEventListener('touchend', tEnd)
    const down = (e: MouseEvent) => { d = true; x = e.pageX; sl = t.scrollLeft; t.style.scrollSnapType = 'none' }
    const move = (e: MouseEvent) => { if (d) t.scrollLeft = sl - (e.pageX - x) }
    const up = () => { d = false; t.style.scrollSnapType = '' }
    t.addEventListener('mousedown', down); t.addEventListener('mousemove', move); addEventListener('mouseup', up)
    const iv = setInterval(() => { if (!p) nx.current(1) }, 3200)
    return () => {
      clearInterval(iv); removeEventListener('mouseup', up)
      s.removeEventListener('mouseenter', pause); s.removeEventListener('mouseleave', play)
      s.removeEventListener('touchstart', pause); s.removeEventListener('touchend', tEnd)
    }
  }, [])
  return (
    <div className="sl" ref={root}>
      <button className="ar l" aria-label="Previous" onClick={() => nx.current(-1)}>‹</button>
      <div className="track" ref={track}>{children}</div>
      <button className="ar r" aria-label="Next" onClick={() => nx.current(1)}>›</button>
    </div>
  )
}
