import { services, bySlug } from '@/lib/data'
import { PageHero } from '@/components/ui'
import QuoteForm from '@/components/QuoteForm'
export const generateStaticParams = () => services.map(s => ({ slug: s.slug }))
export const generateMetadata = ({ params }: { params: { slug: string } }) => ({ title: `Quote: ${bySlug(params.slug).name}` })
export default function QuotePage({ params }: { params: { slug: string } }) {
  const s = bySlug(params.slug)
  return (
    <>
      <PageHero title={`Get a Quote: ${s.name}`} sub="Fill in the form and we'll respond quickly." img={s.slug} tag="FREE QUOTE" />
      <section className="cr"><QuoteForm slug={s.slug} /></section>
    </>
  )
}
