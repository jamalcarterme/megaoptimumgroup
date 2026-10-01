import Link from 'next/link'
import { PageHero } from '@/components/ui'
import { site } from '@/lib/data'
export const metadata = { title: 'Contact' }
export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" sub="We'd love to hear from you" img="logistics" tag="CONTACT" />
      <section className="cr">
        <div className="gx text-ink">
          <div className="wy rv"><i>📍</i><p>{site.address}</p></div>
          <div className="wy rv d1"><i>📞</i><a href={`tel:${site.phone}`}>{site.phone}</a></div>
          <div className="wy rv d2"><i>✉️</i><a href={`mailto:${site.email}`}>{site.email}</a></div>
        </div>
        <div className="text-center mt-8"><Link className="btn" href="/get-quote">Get a Quote</Link></div>
      </section>
    </>
  )
}
