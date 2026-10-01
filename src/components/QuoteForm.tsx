'use client'
import { useEffect, useState } from 'react'
import { services, bySlug, site } from '@/lib/data'
export default function QuoteForm({ slug }: { slug: string }) {
  const [svc, setSvc] = useState(bySlug(slug).name)
  const [pkg, setPkg] = useState('')
  useEffect(() => { const q = new URLSearchParams(location.search).get('pkg'); if (q) setPkg(q) }, [])
  const tiers = (services.find(s => s.name === svc) || bySlug(slug)).tiers
  const data = (f: HTMLFormElement) => Object.fromEntries(new FormData(f)) as Record<string, string>
  const wa = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const v = data(e.currentTarget)
    const m = `Hello MEGAOPTIMUM, I need a quote.\nService: ${svc}\nPackage: ${pkg || 'Not sure yet'}\nName: ${v.name}\nPhone: ${v.phone}\nDetails: ${v.msg}`
    window.open(`https://wa.me/${site.wa}?text=${encodeURIComponent(m)}`, '_blank')
  }
  const mail = (e: React.MouseEvent<HTMLButtonElement>) => {
    const v = data(e.currentTarget.form!)
    location.href = `mailto:${site.email}?subject=${encodeURIComponent('Quote: ' + svc)}&body=${encodeURIComponent(`Name: ${v.name}\nPhone: ${v.phone}\nPackage: ${pkg}\n${v.msg}`)}`
  }
  return (
    <form className="fm rv" onSubmit={wa}>
      <select value={svc} onChange={e => { setSvc(e.target.value); setPkg('') }}>{services.map(s => <option key={s.slug}>{s.name}</option>)}</select>
      <select value={pkg} onChange={e => setPkg(e.target.value)}><option value="">Package (not sure yet)</option>{tiers.map(t => <option key={t.name}>{t.name}</option>)}</select>
      <input name="name" placeholder="Your name" required />
      <input name="phone" placeholder="Phone number" required />
      <textarea name="msg" rows={4} placeholder="Tell us about your project" />
      <button className="btn" type="submit">Send via WhatsApp</button>
      <button className="btn b" type="button" onClick={mail}>Send via Email</button>
    </form>
  )
}
