'use client'
import Image from 'next/image'
import LogoSynce from '../../../public/images/logo_synce_simbolo.png'
import BannerLogistica from '../../../public/images/banner-logistica.png'
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
        <div className='flex items-center'>
          <div className=''>
            <Image src={LogoSynce} alt='Logo synce' />
          </div>
          <div className='flex flex-col'>
            <TitleAnimated
              text='Funcionalidades Synce'
              className='text-[#666] font-normal text-5xl w-10'
            />
            <ListAnimated className='ml-4 list-disc text-black' />
            <div className='flex justify-center'>
              <ButtonAnimated
                className='mt-8 rounded-lg py-3 px-5 text-white bg-synce-secondary hover:bg-synce-secondary-dark'
                link='#'
                text='Conheça a Synce'
              />
            </div>
          </div>
        </div>
      </main>
      <section className='bg-[#F8F8F8] p-10'>
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
    </>
  )
}
