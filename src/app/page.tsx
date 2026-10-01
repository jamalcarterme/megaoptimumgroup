import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/data'
import { ServiceCard, Vcols, bg } from '@/components/ui'
import Slider from '@/components/Slider'
import Typewriter from '@/components/Typewriter'
export default function Home() {
  return (
    <>
      <section className="hero">
        <video autoPlay muted loop playsInline poster="/img/oil-gas.jpg"><source src="/video/hero.mp4" type="video/mp4" /></video>
        <div className="ov" />
        <div className="in">
          <span className="tag rv" style={{ color: 'var(--gold)' }}>MEGAOPTIMUM GROUP MULTI-INVESTMENT LTD.</span>
          <Typewriter words={services.map(s => s.name)} />
          <p className="s rv d2">Your services is our priority!!!</p>
          <div className="rv d3"><Link className="btn" href="/get-quote">Get a Free Quote</Link><Link className="btn o" href="/services">Our Services</Link></div>
        </div>
        <Image className="hshape hex" src="/img/ship.jpg" alt="" width={260} height={300} />
      </section>
      <div className="stats">
        {[['8', 'Core Services'], ['24/7', 'Support'], ['Lagos', 'Based'], ['1st', 'Your Priority']].map(([b, t], i) => <div key={t} className={`hx rv d${i}`}><b>{b}</b>{t}</div>)}
      </div>
      <section className="cr">
        <div className="text-center"><span className="tag rv">What we do</span><h2 className="rv d1">Pick a service</h2><p className="lead rv d2">Tap any service to see details, pricing and request a quote.</p></div>
        <Slider>{services.map(s => <ServiceCard key={s.slug} s={s} base="/services" label="Learn more →" />)}</Slider>
      </section>
      <section className="dk cl">
        <div className="split">
          <div className="rv l"><span className="tag">About us</span><h2>One group. Many solutions.</h2><p className="mb-5 opacity-85">MEGAOPTIMUM Group is a Lagos-based multi-investment company led by Engr Jerry Nwakuba, delivering quality across energy, property, vehicles, construction, security and logistics.</p><Link className="btn" href="/about">Read our story</Link></div>
          <div className="rv r"><Vcols /></div>
        </div>
      </section>
      <div className="tri-d" />
      <section className="bgi" style={bg('equipment')}>
        <div className="text-center">
          <span className="tag rv">Packages &amp; Pricing</span><h2 className="rv d1 text-white">Simple packages for every need</h2><p className="lead rv d2">Choose your service to view its packages.</p>
          <div className="chips rv d3">{services.map(s => <Link key={s.slug} className="chip" href={`/packages/${s.slug}`}>{s.icon} {s.name}</Link>)}</div>
        </div>
      </section>
      <section className="nv cb">
        <div className="text-center"><span className="tag rv">Why choose us</span><h2 className="rv d1">Built on trust</h2></div>
        <div className="gx mt-8">{[['🏆', 'Quality'], ['⏱️', 'On Time'], ['🤝', 'Honest Pricing'], ['🛡️', 'Safety First']].map(([i, t], k) => <div key={t} className={`wy rv d${k}`}><i>{i}</i><h3>{t}</h3></div>)}</div>
      </section>
      <section className="cr">
        <div className="band rv" style={bg('interior')}><h2>Ready to start your project?</h2><p className="lead">Tell us what you need, we reply fast.</p><Link className="btn" href="/get-quote">Get a Free Quote</Link> <Link className="btn b" href="/contact">Contact Us</Link></div>
      </section>
    </>
  )
}
