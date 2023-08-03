'use client'
import React from 'react'
import { motion } from 'framer-motion'
import LogoSynce from '../../../../../public/images/logo_synce.png'
import Image from 'next/image'
import ButtonAnimated from '@/components/ButtonAnimated'
import TitleAnimated from '@/components/TitleAnimated'

const First = () => {
  return (
    <main>
      <div className='flex items-center relative overflow-hidden'>
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 180 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className='w-auto absolute h-full'
        >
          <Image
            className='opacity-10 h-full'
            src={LogoSynce}
            alt='Logo synce'
          />
        </motion.div>
        <div className='flex flex-col py-10 ml-72 w-[450px]'>
          <TitleAnimated
            text='Funcionalidades Synce'
            className='text-[#666] font-normal text-5xl w-10 mb-6'
          />
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.5 }}
            className='text-[#666] w-full mb-8'
          >
            Nosso hub de marketplaces oferece funcionalidades poderosas para
            simplificar o gerenciamento de suas vendas. Centralize todas as suas
            operações, integre o estoque automaticamente entre canais e tenha
            relatórios analíticos em tempo real. Maximize a eficiência e o
            sucesso de suas vendas online com nossa plataforma intuitiva.
          </motion.p>
          <div className='flex justify-center'>
            <ButtonAnimated link='#' text='Conheça a Synce' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default First
