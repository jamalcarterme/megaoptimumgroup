import { PageHero, CardGrid } from '@/components/ui'
export const metadata = { title: 'Packages & Pricing' }
export default function Page() {
  return (<><PageHero title="Packages & Pricing" sub="Choose a service to see its packages" img="logistics" /><CardGrid base="/packages" label="View packages →" /></>)
}
