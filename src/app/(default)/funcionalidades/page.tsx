import { Metadata } from 'next'
import First from './sections/First'
import Second from './sections/Second'
import Third from './sections/Third'

export const metadata: Metadata = {
  title: 'Funcionalidades',
}

export default function Integracoes() {
  return (
    <>
      <First />
      <Second />
      <Third />
    </>
  )
}
