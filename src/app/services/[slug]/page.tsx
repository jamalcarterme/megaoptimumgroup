import Link from 'next/link'
import { services, bySlug } from '@/lib/data'
import { PageHero, Vcols, Tiers } from '@/components/ui'
export const generateStaticParams = () => services.map(s => ({ slug: s.slug }))
export const generateMetadata = ({ params }: { params: { slug: string } }) => ({ title: bySlug(params.slug).name })
export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = bySlug(params.slug)
  return (
    <>
      <PageHero title={s.name} sub={s.tagline} img={s.slug} tag={`MEGAOPTIMUM ${s.name.toUpperCase()}`} />
      <section className="cr"><div className="split">
        <div className="rv l"><span className="tag">Overview</span><h2>{s.tagline}</h2><p className="mb-4">{s.desc}</p>
          <ul className="ck mb-6">{s.points.map(p => <li key={p}>{p}</li>)}</ul>
          <Link className="btn" href={`/get-quote/${s.slug}`}>Get a Quote</Link> <Link className="btn b" href={`/packages/${s.slug}`}>View Pricing</Link></div>
        <div className="rv r"><Vcols /></div>
      </div></section>
      <section className="nv cl"><div className="text-center"><span className="tag">Packages</span><h2>Starting prices</h2></div><Tiers s={s} label="Choose this" /></section>
    </>
  )
}
