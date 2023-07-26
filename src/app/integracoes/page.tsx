import Image from 'next/image'
import Link from 'next/link'
import '../../../public/css/swiper.css'
import Carroussel from '@/pages/carroussel'
import BlockContent from '@/pages/blockContent'
import ImagemConteudoIntegracoes from '../../../public/images/banner_integraçoes-v2.png'
import LogoSynce from '../../../public/images/logo_synce.png'
import BannerLogistica from '../../../public/images/banner-logistica.png'
import BlockImageContent from '@/pages/blockImageContent'
import ListAnimated from '@/components/ListAnimated'
import TitleAnimated from '@/components/TitleAnimated'

export default function Integracoes() {
  return (
    <>
      <main>
        <div className="relative w-full h-auto flex flex-col items-end bg-[url('/images/banner-integracoes.png')] bg-no-repeat bg-cover  bg-right lg:bg-top  py-16 px-4 lg:px-14">
          <div>
            {/* <h1 className='text-white text-[45px] font-medium leading-10 mb-6'>
              Integrações de <br /> soluções
            </h1> */}
            <TitleAnimated
              text='Integrações de soluções'
              className='text-white w-[350px] text-[45px] font-medium leading-10 mb-6'
            />
            <ListAnimated />
            <Link
              className='rounded-lg py-3 px-5 text-white bg-synce-secondary hover:bg-synce-secondary-dark'
              href='/'
            >
              Conheca a Synce
            </Link>
          </div>
        </div>
      </main>
      <Carroussel />
      <section className='p-10 flex justify-center items-center space-x-8 flex-col lg:flex-row'>
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
        <div className='w-full flex justify-center lg:w-2/6'>
          <Image src={ImagemConteudoIntegracoes} alt='Imagem de integrações' />
        </div>
      </section>
      <section className='bg-[#F8F8F8] p-10'>
        <h3 className='text-synce text-center text-[35px] font-bold mb-10'>
          Logística
        </h3>
        <div className='flex space-x-6'>
          <BlockImageContent
            img={BannerLogistica}
            title='Lorem ipsum dolor sit amet'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
          />
          <BlockImageContent
            img={BannerLogistica}
            title='Lorem ipsum dolor sit amet'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
          />
          <BlockImageContent
            img={BannerLogistica}
            title='Lorem ipsum dolor sit amet'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing'
          />
        </div>
      </section>

      <section className='bg-synce flex'>
        <div className='w-5/6 flex items-start px-5 mr-6 flex-col lg:justify-between lg:items-center lg:flex-row'>
          <div className='pl-5 lg:w-9/12 lg:pl-20'>
            <p className='text-[30px] text-white font-bold'>
              Não perca essa oportunidade e comece hoje mesmo!
            </p>
          </div>
          <div className='pl-5 lg:w-3/12 flex justify-end'>
            <Link
              className='rounded-lg py-3 px-5 text-white bg-synce-secondary hover:bg-synce-secondary-dark'
              href='/'
            >
              Conheca a Synce
            </Link>
          </div>
        </div>
        <div className='w-1/6 mr-4'>
          <Image src={LogoSynce} alt='Icone Synce' />
        </div>
      </section>
    </>
  )
}
