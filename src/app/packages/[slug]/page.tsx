import Link from 'next/link'
import { services, bySlug } from '@/lib/data'
import { PageHero, Tiers } from '@/components/ui'
export const generateStaticParams = () => services.map(s => ({ slug: s.slug }))
export const generateMetadata = ({ params }: { params: { slug: string } }) => ({ title: `${bySlug(params.slug).name} Packages` })
export default function PackagesPage({ params }: { params: { slug: string } }) {
  const s = bySlug(params.slug)
  return (
    <>
      <PageHero title={`${s.name} Packages`} sub="Transparent starting prices. Final price confirmed after assessment." img={s.slug} tag="PRICING" />
      <section className="cr"><Tiers s={s} label="Get quote for this" /><p className="text-center mt-8"><Link href={`/services/${s.slug}`}>← Back to {s.name}</Link></p></section>
    </>
  )
}
