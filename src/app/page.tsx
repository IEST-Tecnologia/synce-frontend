'use client'

import './styles.css'
import First from './sections/First'
import Second from './sections/Second'
import FAQ from './sections/FAQ'
import Third from './sections/Third'
import ContactForm from './sections/ContactForm'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion'

export default function Home() {
  return (
    <div className='relative overflow-hidden'>
      <First />
      <div className='h-28 bg-stone-50'>Carousel</div>
      <Second />
      <FAQ />
      <Third />
      <ContactForm />
    </div>
  )
}
