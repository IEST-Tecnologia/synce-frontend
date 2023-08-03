'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import LogoSynce from '@/assets/logo_synce.png'
import ButtonAnimated from '@/components/ButtonAnimated'
import TitleAnimated from '@/components/TitleAnimated'
import Girl from '@/assets/girl.png'

const Third = () => {
  return (
    <section className='bg-synce-primary flex'>
      <div className='w-0 lg:w-3/6 relative'>
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 180 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className='w-[250px] absolute h-full left-10'
        >
          <Image
            className='brightness-50 h-full opacity-30 '
            src={LogoSynce}
            alt=''
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='hidden lg:block w-full h-full absolute'
        >
          <Image
            className=' absolute h-[120%] top-[-63px] left-40 z-10'
            src={Girl}
            alt=''
          />
        </motion.div>
      </div>
      <div className='w-full flex flex-col justify-center items-center lg:block z-10 my-12 lg:w-3/6'>
        <TitleAnimated
          text='Aproveite agora mesmo!'
          className='text-white text-4xl font-bold w-[300px] mb-6 text-center lg:text-left'
        />
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.5 }}
          className='text-white mb-8 w-3/4 text-center h-auto lg:h-[60px] lg:text-left'
        >
          Fale com um de nossos especialistas e veja como o Synce poderá
          potencializar a gestão de seus marketplaces.
        </motion.p>
        <ButtonAnimated link='#' text='Fale conosco' />
      </div>
    </section>
  )
}

export default Third
