'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import LogoSynce from '../../public/images/logo_synce.png'
import useOnScreen from '@/hooks/useOnScreen'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Opportunity = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)
  return (
    <section className='bg-synce-primary flex flex-wrap lg:flex-nowrap overflow-hidden relative'>
      <div className='w-full lg:w-5/6 flex px-5 py-10 flex-col z-10 items-center justify-center lg:mr-6 lg:justify-between lg:flex-row '>
        <div className='pl-5 lg:w-9/12 lg:pl-20' ref={ref}>
          {isVisible && (
            <TypeAnimation
              className='text-[30px] text-white font-bold h-full text-center lg:text-left mb-5 lg:mb-0 lg:h-24'
              sequence={[
                'Não perca essa oportunidade e comece hoje mesmo!',
                1000,
              ]}
              speed={50}
              repeat={0}
              wrapper='p'
            />
          )}
        </div>
        <div className='pl-5 lg:w-3/12 flex justify-end'>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              className='rounded-lg py-3 px-5 text-white bg-synce-secondary hover:bg-synce-secondary-dark'
              href='/'
            >
              FALE CONOSCO
            </Link>
          </motion.div>
        </div>
      </div>
      <div className='w-full absolute h-full z-0 lg:w-1/6 right-0'>
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 180 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className='w-full h-full'
        >
          <Image
            className='brightness-50 h-full opacity-30'
            src={LogoSynce}
            alt='Icone Synce'
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Opportunity
