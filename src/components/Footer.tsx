import Link from 'next/link'
import Image from 'next/image'
import { services, site, NAV } from '@/lib/data'
export default function Footer() {
  return (
    <footer>
      <div className="gx">
        <div><Link href="/" className="brand ft"><Image src="/img/logo-emblem.png" alt="MEGAOPTIMUM Group logo" width={273} height={358} /><span className="bn"><b>MEGAOPTIMUM <em>Group</em></b><small>Multi-Investment Ltd.</small><span className="rc">RC: 1294422</span></span></Link><p>Your services is our priority!!!</p></div>
        <div><h4>Services</h4>{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}</div>
        <div><h4>Quick Links</h4>{NAV.map(([h, t]) => <Link key={h} href={h}>{t}</Link>)}<Link href="/get-quote">Get a Quote</Link></div>
        <div><h4>Contact</h4><p>{site.address}</p><a href={`tel:${site.phone}`}>📞 {site.phone}</a><a href={`mailto:${site.email}`}>✉️ {site.email}</a><p>CEO: {site.ceo}</p><a href="https://instagram.com/megaoptimum" target="_blank" rel="noreferrer">@megaoptimum (Facebook &amp; Instagram)</a></div>
      </div>
      <div className="cp">© {new Date().getFullYear()} MEGAOPTIMUM Group Multi-Investment Ltd. All rights reserved.</div>
    </footer>
  )
}
