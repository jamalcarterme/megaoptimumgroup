import Link from 'next/link'
import { PageHero, Vcols } from '@/components/ui'
import { site } from '@/lib/data'
export const metadata = { title: 'About Us' }
export default function About() {
  return (
    <>
      <PageHero title="About MEGAOPTIMUM" sub="…we are solution providers" img="oil-gas" tag="ABOUT US" />
      <section className="cr"><div className="split">
        <div className="rv l"><span className="tag">Our story</span><h2>Your services is our priority!!!</h2>
          <p className="mb-4">MEGAOPTIMUM Group Multi-Investment Ltd. is a Lagos-based company offering oil &amp; gas, real estate, automobile, welding, interior design, security, logistics and industrial cleaning services under one trusted name.</p>
          <p className="mb-5"><b>CEO:</b> {site.ceo}</p><Link className="btn" href="/services">See services</Link></div>
        <div className="rv r"><Vcols /></div>
      </div></section>
      <section className="nv cb"><div className="gx">
        {[['🎯', 'Mission', 'Deliver reliable, high-quality solutions that put clients first.'], ['👁️', 'Vision', 'To be a leading multi-service group across Nigeria.'], ['💎', 'Values', 'Integrity, quality, safety and commitment.']].map(([i, t, p], k) => <div key={t} className={`wy rv d${k}`}><i>{i}</i><h3>{t}</h3><p>{p}</p></div>)}
      </div></section>
    </>
  )
}
