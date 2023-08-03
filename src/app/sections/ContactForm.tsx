'use client'

import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className='relative px-7 py-12'
    >
      <motion.h1
        whileHover={{
          translateY: -10,
          transition: { duration: 0.5 },
        }}
        className='mb-8 text-2xl font-semibold text-center '
      >
        Fale conosco agora mesmo
      </motion.h1>
      <div className='space-y-4'>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='mb-1 uppercase'>Nome</div>
          <TextInput className='w-full' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className='mb-1 uppercase'>Email</div>
          <TextInput className='w-full' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className='mb-1 uppercase'>Telefone</div>
          <TextInput className='w-full' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className='mb-1 uppercase'>Nome da empresa</div>
          <TextInput className='w-full' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className='mb-1 uppercase'>qual erp utiliza</div>
          <TextInput className='w-full' />
        </motion.div>
      </div>

      <div className='mt-9 flex items-center mb-8'>
        <div className='p-2 border-2 border-gray-300 mr-5'> </div>
        <div className='text-gray-400'>
          Eu concordo com a{' '}
          <a href='#' className='underline'>
            Política de Privacidade.
          </a>
        </div>
      </div>
      <Button>Submeter</Button>
    </motion.div>
  )
}
