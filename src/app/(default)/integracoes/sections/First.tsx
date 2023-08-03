'use client'
import TitleAnimated from '@/components/TitleAnimated'
import React from 'react'
import { motion } from 'framer-motion'
import ButtonAnimated from '@/components/ButtonAnimated'
import ListAnimated from '@/components/ListAnimated'

const First = () => {
  return (
    <main>
      <div className="relative w-full space-y-5 h-auto flex flex-col items-center lg:items-end bg-gradient-to-b from-synce-primary to-[#F43400] lg:bg-[url('/images/banner-integracoes.png')] bg-no-repeat bg-cover lg:bg-right  py-16 px-4 ">
        <div className='flex flex-col justify-center items-center lg:items-start w-[95%] lg:w-[450px]'>
          <TitleAnimated
            text='Integração de soluções'
            className='text-white w-full mb-4 text-center lg:text-left text-[45px] font-medium leading-10 lg:w-[350px]'
          />
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='text-white text-left mb-2 font-bold'
          >
            Conheça nosso integrador de marketplaces!
          </motion.h2>
          <ListAnimated className='ml-6 mb-8 list-disc text-white' />
          <ButtonAnimated
            className='rounded-lg py-3 px-5 text-white bg-synce-secondary hover:bg-synce-secondary-dark'
            link='#'
            text='Fale com um especialista'
          />
        </div>
      </div>
    </main>
  )
}

export default First
