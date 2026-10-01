import { PageHero, CardGrid } from '@/components/ui'
export const metadata = { title: 'Get a Quote' }
export default function Page() {
  return (<><PageHero title="Get a Quote" sub="Which service do you need?" img="interior" /><CardGrid base="/get-quote" label="Request quote →" /></>)
}
