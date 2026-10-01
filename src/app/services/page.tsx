import { PageHero, CardGrid } from '@/components/ui'
export const metadata = { title: 'Our Services' }
export default function Page() {
  return (<><PageHero title="Our Services" sub="Everything MEGAOPTIMUM can do for you" img="welding" /><CardGrid base="/services" label="View service →" /></>)
}
