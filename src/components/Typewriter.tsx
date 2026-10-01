'use client'
import { useEffect, useRef } from 'react'
export default function Typewriter({ words }: { words: string[] }) {
  const tw = useRef<HTMLSpanElement>(null)
  const wr = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let run = 0
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))
    const go = async () => {
      const id = ++run, t = tw.current!, w = wr.current!
      w.classList.remove('go'); void w.offsetWidth; w.classList.add('go')
      let i = 0
      while (id === run) {
        const word = words[i++ % words.length]
        for (let k = 1; k <= word.length && id === run; k++) { t.textContent = word.slice(0, k); await sleep(85) }
        await sleep(1400)
        for (let k = word.length; k >= 0 && id === run; k--) { t.textContent = word.slice(0, k); await sleep(40) }
      }
    }
    // restarts every time the hero comes back into view
    const io = new IntersectionObserver(es => es.forEach(e => (e.isIntersecting ? go() : run++)), { threshold: 0.3 })
    io.observe(tw.current!.closest('.hero')!)
    return () => { run++; io.disconnect() }
  }, [words])
  return (
    <>
      <h1 className="rv d1">Your trusted partner in <br /><span ref={tw} className="tw">&nbsp;</span></h1>
      <div ref={wr} className="write">…we are solution providers</div>
    </>
  )
}
