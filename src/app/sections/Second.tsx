'use client'
import Button from '@/components/Button'
import Image from 'next/image'
import React, { useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { BsPatchQuestionFill, BsThreeDots } from 'react-icons/bs'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { HiMegaphone } from 'react-icons/hi2'
import useOnScreen from '@/hooks/useOnScreen'

export default function Second() {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  return (
    <div className='relative bg-synce-primary  lg:bg-transparent lg:bg-[url("/images/second_bg.png")] lg:bg-cover lg:bg-no-repeat lg:h-full'>
      <div className='absolute h-full hidden lg:flex ml-64'>
        <img
          src='/images/second_woman.png'
          alt='woman'
          className='h-full w-auto translate-x-8 '
        />
      </div>
      <div className=' ml-auto text-white lg:w-1/2  p-16 space-y-8 '>
        <motion.div
          whileHover={{
            translateY: -10,
            transition: { duration: 0.2 },
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
        <p className='mb-8' ref={ref}>
          {isVisible && (
            <TypeAnimation
              sequence={[
                'Com o nosso hub, você terá várias funcionalidades à sua disposição:',
              ]}
              wrapper='span'
              speed={50}
              repeat={0}
            />
          )}
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
