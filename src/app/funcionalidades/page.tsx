'use client'
import Image from 'next/image'
import LogoSynce from '../../../public/images/logo_synce.png'
import BannerLogistica from '../../../public/images/banner-logistica.png'
import Girl from '../../../public/images/girl.png'
import BlockImageContent from '@/pages/blockImageContent'
import ListAnimated from '@/components/ListAnimated'
import { motion } from 'framer-motion'
import TitleAnimated from '@/components/TitleAnimated'
import ButtonAnimated from '@/components/ButtonAnimated'
import TitleSectionAnimated from '@/components/TitleSectionAnimated'

const blocksInfosWithImage = [
  {
    image: BannerLogistica,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    image: BannerLogistica,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    image: BannerLogistica,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    image: BannerLogistica,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    image: BannerLogistica,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    image: BannerLogistica,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
]

export default function Integracoes() {
  return (
    <>
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
          <div className='flex flex-col py-10 ml-72'>
            <TitleAnimated
              text='Funcionalidades Synce'
              className='text-[#666] font-normal text-5xl w-10 mb-6'
            />
            <ListAnimated className='ml-4 list-disc text-[#666] mb-8' />
            <div className='flex justify-center'>
              <ButtonAnimated link='#' text='Conheça a Synce' />
            </div>
          </div>
        </div>
      </main>
      <section className='bg-[#F8F8F8] px-10 pt-10 pb-20'>
        <TitleSectionAnimated text='Principais Recursos' />
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          {blocksInfosWithImage.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay:
                  index === 0
                    ? 0
                    : index === 1
                    ? 0.3
                    : index === 2
                    ? 0.5
                    : index === 3
                    ? 0.7
                    : index === 4
                    ? 0.9
                    : index === 5
                    ? 1.1
                    : 1.3,
                duration: 0.5,
              }}
              className='w-full'
            >
              <BlockImageContent
                img={item.image}
                title={item.title}
                text={item.text}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <section className='bg-synce-primary flex'>
        <div className='w-3/6 relative'>
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='w-auto absolute h-full left-10'
          >
            <Image className='brightness-75 h-full' src={LogoSynce} alt='' />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='w-full h-full absolute'
          >
            <Image
              className='absolute h-[120%] top-[-65px] left-40 z-10'
              src={Girl}
              alt=''
            />
          </motion.div>
        </div>
        <div className='w-3/6 my-12'>
          <TitleAnimated
            text='Aproveite agora mesmo!'
            className='text-white text-4xl font-bold w-[300px] mb-6'
          />
          <ListAnimated className='ml-4 list-disc text-white mb-8' />
          <ButtonAnimated link='#' text='Saiba mais' />
        </div>
      </section>
    </>
  )
}
