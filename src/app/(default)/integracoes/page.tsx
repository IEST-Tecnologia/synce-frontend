import Carroussel from '@/pages/carroussel'
import ContactForm from '../sections/ContactForm'
import { Metadata } from 'next'
import First from './sections/First'
import Second from './sections/Second'
import Third from './sections/Third'
import Opportunity from '@/components/Opportunity'

export const metadata: Metadata = {
  title: 'Integrações',
}

export default function Integracoes() {
  return (
    <>
      <First />
      <Carroussel />
      <Second />
      <Third />
      <Opportunity />
      <ContactForm />
    </>
  )
}
