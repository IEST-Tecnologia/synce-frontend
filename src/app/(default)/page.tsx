import First from './sections/First'
import Second from './sections/Second'
import FAQ from './sections/FAQ'
import Third from './sections/Third'
import ContactForm from './sections/ContactForm'
import Carroussel from '@/pages/carroussel'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homepage',
}

export default function Home() {
  return (
    <>
      <div className='relative overflow-hidden'>
        <First />
        <Carroussel />
        <Second />
        <FAQ />
        <Third />
        <ContactForm />
      </div>
    </>
  )
}
