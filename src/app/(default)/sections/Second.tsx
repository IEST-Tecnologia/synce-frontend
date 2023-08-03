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
import Banner2 from '@/assets/second_woman.png'

export default function Second() {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  const items = [
    {
      icon: <BsPatchQuestionFill className='text-xl' />,
      text: 'Altere o status de seus produtos',
    },
    {
      icon: <HiOutlineDocumentReport className='text-xl' />,
      text: 'Gere relatórios',
    },
    {
      icon: <HiMegaphone className='text-xl' />,
      text: 'Crie anúncios',
    },
    {
      icon: <BsThreeDots className='text-xl' />,
      text: 'E muito mais!',
    },
  ]

  return (
    <section className='relative bg-synce-primary lg:bg-transparent lg:bg-[url("/images/second_bg.png")] lg:bg-cover lg:bg-no-repeat lg:h-full'>
      <Image
        src={Banner2}
        alt='Banner da pagina'
        className='absolute h-full hidden lg:flex ml-64 w-auto translate-x-8 '
      />
      <div className=' ml-auto text-white lg:w-1/2  p-16 space-y-8 '>
        <motion.h2
          whileHover={{
            translateY: -10,
            transition: { duration: 0.2 },
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='mb-8 text-2xl font-semibold'
        >
          Um <strong>integrador</strong> completo que trará mais praticidade
          para o seu <strong>dia a dia</strong>!
        </motion.h2>
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
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full grid gap-4 grid-cols-4'
        >
          {items.map((item) => (
            <li className='space-y-4 flex items-center flex-col'>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <p className='text-center'>{item.text}</p>
            </li>
          ))}
        </motion.ul>
        <Button>Agende uma demonstração</Button>
      </div>
    </section>
  )
}
