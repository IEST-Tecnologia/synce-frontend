import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Third() {
  return (
    <div className='relative flex flex-col'>
      <div className='absolute bg-synce-primary -z-20 w-full h-full'></div>
      <div className='absolute flex overflow-hidden h-full -z-10 justify-end ml-auto w-full'>
        {/* <img src='/logo.svg' alt='image' className='h-full w-auto' /> */}

        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src='/logo.png'
            alt='image'
            className='h-full w-auto scale-125 brightness-75'
          />
        </motion.div>
      </div>
      <div className='flex h-full'>
        <div className='md:w-1/2 p-10 my-auto'>
          <motion.h1
            whileHover={{
              translateY: -10,
              transition: { duration: 0.5 },
            }}
            initial={{ opacity: 0, translateX: '100%' }}
            whileInView={{ opacity: 1, translateX: '0%' }}
            transition={{ duration: 0.5 }}
            className='mb-8 text-2xl font-semibold text-white'
          >
            Não perca essa oportunidade e comece hoje mesmo!
          </motion.h1>
          <Button>Fale com um especialista</Button>
        </div>
      </div>
    </div>
  )
}
