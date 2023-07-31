'use client'
import Image from 'next/image'
import Link from 'next/link'
import Carroussel from '@/pages/carroussel'
import BlockContent from '@/pages/blockContent'
import ImagemConteudoIntegracoes from '../../../public/images/banner_integraçoes-v2.png'
import LogoSynce from '../../../public/images/logo_synce.png'
import BannerLogistica from '../../../public/images/banner-logistica.png'
import BlockImageContent from '@/pages/blockImageContent'
import ListAnimated from '@/components/ListAnimated'
import TitleAnimated from '@/components/TitleAnimated'
import ButtonAnimated from '@/components/ButtonAnimated'
import ImageAnimated from '@/components/ImageAnimated'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import useOnScreen from '@/hooks/useOnScreen'
import { useRef } from 'react'
import ContactForm from '../sections/ContactForm'
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
]

export default function Integracoes() {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  return (
    <>
      <main>
        <div className="relative w-full space-y-5 h-auto flex flex-col items-center lg:items-end bg-gradient-to-b from-synce-primary to-[#F43400] lg:bg-[url('/images/banner-integracoes.png')] bg-no-repeat bg-cover  bg-right lg:bg-top  py-16 px-4 lg:px-14">
          <TitleAnimated
            text='Integração de soluções'
            className='text-white w-full text-center lg:text-left text-[45px] font-medium leading-10 lg:w-[350px]'
          />
          <ListAnimated className='ml-4 list-disc text-white' />
          <ButtonAnimated
            className='rounded-lg py-3 px-5 text-white bg-synce-secondary hover:bg-synce-secondary-dark'
            link='#'
            text='Conheça a Synce'
          />
        </div>
      </main>
      <Carroussel />
      <section className='p-5 lg:p-10 flex justify-center items-center space-x-8 flex-col lg:flex-row'>
        <div className='w-full lg:w-4/6 space-y-4'>
          <div className='w-full flex flex-wrap justify-center lg:justify-between'>
            <BlockContent
              title='Lorem ipsum dolor sit amet'
              sub='Gerencie seu estoque'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
            />
            <BlockContent
              title='Lorem ipsum dolor sit amet'
              sub='Gerencie seu estoque'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
            />
          </div>
          <div className='w-full flex flex-wrap justify-center lg:justify-between'>
            <BlockContent
              title='Lorem ipsum dolor sit amet'
              sub='Gerencie seu estoque'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
            />
            <BlockContent
              title='Lorem ipsum dolor sit amet'
              sub='Gerencie seu estoque'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
            />
          </div>
        </div>
        <div className='w-full flex justify-center lg:w-2/6 relative'>
          <ImageAnimated
            image={ImagemConteudoIntegracoes}
            alt='Imagem de integrações'
            className='block'
          />
        </div>
      </section>
      <section className='bg-[#F8F8F8] p-5 lg:p-10'>
        <TitleSectionAnimated text='Logística' />
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          {blocksInfosWithImage.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: index === 0 ? 0.5 : index === 1 ? 0.3 : 0,
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

      <section className='bg-synce-primary flex flex-wrap lg:flex-nowrap overflow-hidden relative'>
        <div className='w-full lg:w-5/6 flex px-5 py-10 flex-col z-10 items-center justify-center lg:mr-6 lg:justify-between lg:flex-row '>
          <div className='pl-5 lg:w-9/12 lg:pl-20' ref={ref}>
            {isVisible && (
              <TypeAnimation
                className='text-[30px] text-white font-bold h-full text-center mb-5 lg:mb-0 lg:h-24'
                sequence={[
                  'Não perca essa oportunidade e comece hoje mesmo!',
                  1000,
                ]}
                speed={50}
                repeat={0}
                wrapper='p'
              />
            )}
          </div>
          <div className='pl-5 lg:w-3/12 flex justify-end'>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                className='rounded-lg py-3 px-5 text-white bg-synce-secondary hover:bg-synce-secondary-dark'
                href='/'
              >
                Conheca a Synce
              </Link>
            </motion.div>
          </div>
        </div>
        <div className='w-full absolute h-full z-0 lg:w-1/6 right-0'>
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='w-full h-full'
          >
            <Image
              className='brightness-75 h-full'
              src={LogoSynce}
              alt='Icone Synce'
            />
          </motion.div>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
