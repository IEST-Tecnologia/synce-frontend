import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { BsPatchQuestionFill, BsThreeDots } from 'react-icons/bs'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { HiMegaphone } from 'react-icons/hi2'

export default function Second() {
  return (
    <div className='relative bg-synce-primary md:bg-transparent md:bg-[url("/second_bg.png")] md:bg-cover md:bg-no-repeat md:h-full'>
      <div className='absolute h-full hidden md:flex ml-64'>
        <img
          src='/second_woman.png'
          alt='woman'
          className='h-full w-auto translate-x-8 '
        />
      </div>
      <div className=' ml-auto text-white md:w-1/2  p-16 space-y-8 '>
        <motion.div
          whileHover={{
            translateY: -10,
            transition: { duration: 0.5 },
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='mb-8 text-2xl font-semibold'>
            Um <strong>integrador</strong> completo que trará mais praticidade
            para o seu <strong>dia a dia</strong>!
          </h2>
        </motion.div>
        <p className='mb-8'>
          <TypeAnimation
            sequence={[
              'Com o nosso hub, você terá várias funcionalidades à sua disposição:',
            ]}
            wrapper='span'
            speed={50}
            repeat={0}
          />
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full grid gap-4 grid-cols-4'
        >
          <div className='space-y-4 flex items-center flex-col'>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <BsPatchQuestionFill className='text-xl' />
            </motion.div>
            <p className='text-center'>Altere o status de seus produtos</p>
          </div>
          <div className='space-y-4 flex items-center flex-col'>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <HiOutlineDocumentReport className='text-xl' />
            </motion.div>
            <p className='text-center'>Gere relatórios</p>
          </div>
          <div className='space-y-4 flex items-center flex-col'>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <HiMegaphone className='text-xl' />
            </motion.div>
            <p className='text-center'>Crie anúncios</p>
          </div>
          <div className='space-y-4 flex items-center flex-col'>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <BsThreeDots className='text-xl' />
            </motion.div>
            <p className='text-center'>E muito mais!</p>
          </div>
        </motion.div>
        <Button>Agende uma demonstração</Button>
      </div>
    </div>
  )
}
